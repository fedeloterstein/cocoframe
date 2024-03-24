// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProxyPay {
    struct User {
        string nameFid;
        string img;
        string buttonTitle;
        uint256 fee;
    }

    mapping(address => User) public users;
    mapping(address => bool) public userExists;
    mapping(address => uint256) public balances;
    address[] public allUsers;

    event UserRegistered(
        address indexed userAddress,
        string nameFid,
        string img,
        string buttonTitle,
        uint256 fee
    );
    event PaymentReceived(address indexed userAddress, uint256 amount);
    event Withdrawal(address indexed userAddress, uint256 amount);

    function registerUser(
        string memory _nameFid,
        string memory _img,
        string memory _buttonTitle,
        uint256 _fee
    ) external {
        require(!userExists[msg.sender], "User already registered");

        User storage newUser = users[msg.sender];
        newUser.nameFid = _nameFid;
        newUser.img = _img;
        newUser.buttonTitle = _buttonTitle;
        newUser.fee = _fee;

        userExists[msg.sender] = true;
        users[msg.sender] = newUser;
        allUsers.push(msg.sender);

        emit UserRegistered(msg.sender, _nameFid, _img, _buttonTitle, _fee);
    }

    function getUserData(
        address _userAddress
    )
        external
        view
        returns (string memory, string memory, string memory, uint256)
    {
        User storage user = users[_userAddress];
        return (user.nameFid, user.img, user.buttonTitle, user.fee);
    }

    function payFee(address _userAddress) external payable {
        require(userExists[_userAddress], "User does not exist");
        User storage user = users[_userAddress];
        require(msg.value == user.fee, "Incorrect fee amount");

        balances[_userAddress] = balances[_userAddress] + user.fee;

        emit PaymentReceived(_userAddress, msg.value);
    }
    function withdraw() external {
        require(userExists[msg.sender], "User does not exist");

        uint256 amount = balances[msg.sender];
        require(amount > 0, "No balance to withdraw");

        balances[msg.sender] = balances[msg.sender] - amount;
        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount);
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}
