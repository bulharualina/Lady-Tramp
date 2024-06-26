import CommonDetails from "@/components/CommonDetails";
import { dogById } from "@/services/dog";

export default async function DogDetails({ params }) {
  const dogDetailsData = await dogById(params.details);
  console.log(dogDetailsData, "alina");

  return <CommonDetails item={dogDetailsData && dogDetailsData.data} />;
}
