import { Skeleton } from "@/components/ui/skeleton";

export const CategorySkeleton = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="flex flex-col items-start justify-center gap-3 px-4 py-2">
                <Skeleton className="w-full h-6 rounded-lg bg-pink-100" />
            </div>
            <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {Array.from({ length: 7 }).map((_, index) => (
                    <Skeleton key={index} className="w-full h-12 bg-pink-100 border border-gray-200 rounded-none" />
                ))}
            </ul>
        </div>

    );
};