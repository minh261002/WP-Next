"use client";

import { BrandSkeleton } from "@/components/skeleton/Brand";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchData } from "@/hooks/use-fetchData";
import { getBrands } from "@/services/brandService";
import Image from "next/image";

const Brand = () => {
    const { data, isLoading, error } = useFetchData("brands", getBrands);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (isLoading) {
        return <BrandSkeleton />;
    }
    return (
        <Card className="rounded-md">
            <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl font-medium">
                    Thương hiệu
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-5">
                    {data?.map((brand) => (
                        <div key={brand.id} className="flex flex-col items-center justify-center border">
                            <Image src={brand.image} alt={brand.name} width={100} height={100} className="w-full h-24 object-contain" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Brand;