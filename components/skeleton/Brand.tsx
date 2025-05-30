import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";

export const BrandSkeleton = () => {
    return (
        <Card className="rounded-md">
            <CardHeader className="border-b border-gray-200">
                <CardTitle>
                    <Skeleton className="w-1/5 h-4 rounded-lg bg-pink-100" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton key={index} className="w-full h-20 bg-pink-100 border border-gray-200 rounded-none" />
                    ))}
                </div>
            </CardContent>
        </Card>

    );
};