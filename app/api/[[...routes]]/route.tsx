/** @jsxImportSource frog/jsx */

import { Button, Frog, parseEther } from "frog";
import { handle } from "frog/next";
import { http, createPublicClient } from "viem";
import { baseSepolia } from "viem/chains";
import { PinataFDK } from "pinata-fdk";
import abi from "./abi.json";

const fdk = new PinataFDK({
  pinata_jwt: process.env.PINATA_JWT || "",
  pinata_gateway: "",
});

const CONTRACT = process.env.CONTRACT_ADDRESS as `0x` || ""

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(process.env.ALCHEMY_URL),
});



async function remainingSupply() {
  try {
    const balance = await publicClient.readContract({
      address: CONTRACT,
      abi: abi.abi,
      functionName: "totalSupply",
    });
    const readableBalance = Number(balance);
    return readableBalance;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
});

app.use(
  "/finish",
  fdk.analyticsMiddleware({ frameId: "hats-store", customId: "purchased" }),
);

app.frame("/", async (c) => {
  const balance = await remainingSupply();
  console.log(balance);
  if (typeof balance === "number" && balance === 0) {
    return c.res({
      image:
        "https://dweb.mypinata.cloud/ipfs/QmeeXny8775RQBZDhSppkRN15zn5nFjQUKeKAvYvdNx986",
      imageAspectRatio: "1:1",
      intents: [
        <Button.Link href="https://warpcast.com/~/channel/pinata">
          Join the Pinata Channel
        </Button.Link>,
      ],
      title: "Pinta Hat Store - SOLD OUT",
    });
  } else {
    return c.res({
      action: "/finish",
      image:
        "https://dweb.mypinata.cloud/ipfs/QmeC7uQZqkjmc1T6sufzbJWQpoeoYjQPxCXKUSoDrXfQFy",
      imageAspectRatio: "1:1",
      intents: [
        <Button.Transaction target="/buy/0.0005">
          Buy for 0.005 ETH
        </Button.Transaction>
      ],
      title: "Pinta Hat Store",
    });
  }
});

app.frame("/finish", (c) => {
  return c.res({
    image:
      "https://dweb.mypinata.cloud/ipfs/QmZPysm8ZiR9PaNxNGQvqdT2gBjdYsjNskDkZ1vkVs3Tju",
    imageAspectRatio: "1:1",
    intents: [
      <Button.Link href="https://warpcast.com/~/channel/pinata">
        Join the Pinata Channel
      </Button.Link>,
    ],
    title: "Pinta Hat Store",
  });
});


app.transaction("/buy/:price", async (c) => {
  
  const price = c.req.param('price')

  return c.contract({
    abi: abi.abi,
    // @ts-ignore
    chainId: "eip155:84532",
    functionName: "buyHat",
    args: [c.frameData?.fid],
    to: CONTRACT,
    value: parseEther(`${price}`),
  });
});

export const GET = handle(app);
export const POST = handle(app);