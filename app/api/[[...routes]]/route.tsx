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




const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
});

app.use(
  "/finish",
  fdk.analyticsMiddleware({ frameId: "hats-store", customId: "purchased" }),
);

app.frame("/:fee/:userAddress/:img/:buttonTitle", async (c) => {
  const fee = c.req.param('fee')
  const userAddress = c.req.param('userAddress')
  const img = c.req.param('img')
  const buttonTitle = c.req.param('buttonTitle')
    return c.res({
      action: "/finish",
      image: img,
      imageAspectRatio: "1:1",
      intents: [
        <Button.Transaction target={`/buy/${fee}/${userAddress}`}>
          {buttonTitle} {fee} ETH
        </Button.Transaction>,
        <Button.Link href="https://hat-store-frame-indol.vercel.app/">Register in frames</Button.Link>
      ],
      title: "Pinta Hat Store",
    });

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


app.transaction("/buy/:price/:userAddress", async (c) => {
  
  const price = c.req.param('price')
  const userAddress = c.req.param('userAddress')
  return c.contract({
    abi: abi.abi,
    // @ts-ignore
    chainId: "eip155:84532",
    functionName: "payFee",
    args: [userAddress],
    to: CONTRACT,
    value: parseEther(`${price}`),
  });
});

export const GET = handle(app);
export const POST = handle(app);