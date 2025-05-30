import { Skeleton } from "@/components/ui/skeleton";

export const BrandSkeleton = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="w-full h-20 rounded-lg" />
            <Skeleton className="w-full h-20 rounded-lg" />
        </div>
    );
};