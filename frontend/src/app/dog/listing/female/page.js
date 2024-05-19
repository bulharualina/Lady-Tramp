import CommonListing from "@/components/CommonListing";
import { dogByGender } from "@/services/dog";

export default async function Dogs() {
  const getAllDogs = await dogByGender("Female");

  return <CommonListing data={getAllDogs && getAllDogs.data} />;
}
