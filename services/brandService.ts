import type { Brand } from "@/types/brand";
import axiosInstance from "@/lib/axios";

export const getBrands = async (): Promise<Brand[]> => {
    const response = await axiosInstance.get("/wp/v2/product_brand?per_page=10");
    return response.data;
};