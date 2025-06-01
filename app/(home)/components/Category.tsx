
"use client";

import { useFetchData } from '@/hooks/use-fetchData';

import { getCategories } from '@/services/categoryService';
import React from 'react'
import { CategorySkeleton } from '@/components/skeleton/Category';
import Link from 'next/link';


const Category = () => {
    const { data, isLoading, error } = useFetchData("categories", getCategories);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (isLoading) {
        return <CategorySkeleton />
    }
    return (
        <div className='w-full h-full bg-white'>
            <div className='flex flex-col items-start justify-center gap-3 px-4 py-2'>
                <h3 className='text-md font-bold text-gray-500'>Danh mục sản phẩm</h3>
            </div>
            <ul className="w-full text-sm font-medium text-gray-900 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {data?.map((category) => (
                    category.id != 1 && (
                        <li key={category.id} className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                            <Link href={`/danh-muc/${category.slug}`} className='text-md font-medium text-gray-500 hover:text-pink-500'>
                                {category.name}
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        </div>

    )
}

export default Category