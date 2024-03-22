import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";
import { Loading } from "@/components/Loading";
import ProfileCard from "@/components/ProfileCard";
import { SimpleGrid } from "@chakra-ui/react";
import { Dashboard } from "@/components/Dashboard";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api`
  );
  return {
    other: frameTags,
  };
}

async function getData() {
  const options = {
    method: "GET",
    headers: { Authorization: `Bearer ${process.env.PINATA_API_KEY}` },
  };

  const res = fetch("https://api.pinata.cloud/v3/farcaster/users", options);

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (await res).json();
}

export default async function Home() {
  return <Dashboard />;
}
