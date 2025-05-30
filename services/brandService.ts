import type { Brand } from "@/types/brand";
import axiosInstance from "@/lib/axios";

export const getBrands = async (): Promise<Brand[]> => {
    const response = await axiosInstance.get("/wp/v2/product_brand");
    return response.data;
};