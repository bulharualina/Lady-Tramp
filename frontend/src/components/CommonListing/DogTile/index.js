'use client';
import { useRouter } from 'next/navigation';

export default function DogTile({ item }) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/dog/${item._id}`)}>
      <div className="overflow-hidden aspect-w-1 aspect-h-1 h-52">
        <img
          src={item.imageUrl}
          alt="Dog image"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
        />
      </div>
      {item.onAdopt === 'yes' ? (
        <div className="absolute top-0 m-2 rounded-full bg-black">
          <p className="rounded-full  p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            Adopt
          </p>
        </div>
      ) : null}
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <h3 className="md-2 text-gray-400 text-sm">{item.name}</h3>
      </div>
    </div>
  );
}
