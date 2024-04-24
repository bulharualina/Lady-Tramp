import CommonListing from '@/components/CommonListing';
import { getAllAdminDogs } from '@/services/dog';

export default async function AdminAllDogs() {
  const allAdminDogs = await getAllAdminDogs();
  console.log(allAdminDogs);
  return <CommonListing data={allAdminDogs && allAdminDogs.data} />;

}
