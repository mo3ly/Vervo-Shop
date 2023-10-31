import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex w-full h-screen">
        <Skeleton className="w-1/2 h-full" />
        <div className="w-1/2 flex items-center justify-start h-full px-10">
          <div className="flex justify-start flex-col items-start">
            <Skeleton className="h-6 w-72 mb-1" />
            <Skeleton className="h-4 w-32" />

            <div className="flex space-x-2 my-8">
              {[0, 1, 2, 3, 4].map((size) => (
                <Skeleton key={size} className="w-8 h-8 " />
              ))}
            </div>

            <Skeleton className="mb-6 h-20 w-72" />
            <Skeleton className="h-3 w-16" />

            <div className="flex items-center justify-between my-12 space-x-3">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        </div>
        <Skeleton className="flex text-sm w-64 absolute bottom-0 right-0 h-16 " />
      </div>
    </>
  );
}
