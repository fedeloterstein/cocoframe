import { ProfileDetails } from "@/components/ProfileDetails";

async function getData(fid: string) {
  const options = {
    method: "GET",
    headers: { Authorization: "Bearer 6337454def08445c42bf" },
  };

  const result = await fetch(
    `https://api.pinata.cloud/v3/farcaster/users/${fid}`,
    options
  );

  const resultData = await result.json();

  return resultData.data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return <ProfileDetails data={data} />;
}
