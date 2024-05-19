import CommonListing from "@/components/CommonListing";
import { dogByGender } from "@/services/dog";

export default async function Dogs() {
  const getAllDogs = await dogByGender("Male");

  return <CommonListing data={getAllDogs && getAllDogs.data} />;
}
