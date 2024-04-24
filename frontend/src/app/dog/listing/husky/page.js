import CommonListing from '@/components/CommonListing';
import { dogByCategory } from '@/services/dog';

export default async function HuskyAllDogs() {
  const getAllDogs = await dogByCategory('Husky');

  return <CommonListing data={getAllDogs && getAllDogs.data} />;
}
