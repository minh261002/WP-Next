
import axiosInstance from "@/lib/axios";
import { Category } from "@/types/category";

export const getCategories = async (): Promise<Category[]> => {
    const response = await axiosInstance.get("/wp/v2/product_cat?per_page=10&orderby=id&order=asc");
    return response.data;
};