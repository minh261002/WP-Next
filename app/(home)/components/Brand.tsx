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
        <Card>
            <CardHeader>
                <CardTitle>
                    Thương hiệu
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-4 gap-4">

                </div>
            </CardContent>
        </Card>
    );
};

export default Brand;