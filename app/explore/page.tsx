import { Loading } from "@/components/Loading";
import ProfileCard from "@/components/ProfileCard";
import { SimpleGrid } from "@chakra-ui/react";

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
  const data = await getData();

  if (data) {
    return (
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {data.data.users.map((user: any, index: number) => (
          <ProfileCard user={user} key={index} />
        ))}
      </SimpleGrid>
    );
  }
  return <Loading />;
}
