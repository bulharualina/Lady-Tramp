import CommonListing from "@/components/CommonListing";
import { getAllAdminDogs } from "@/services/dog";

export default async function Dogs() {
  const getAllDogs = await getAllAdminDogs();

  return <CommonListing data={getAllDogs && getAllDogs.data} />;
}
