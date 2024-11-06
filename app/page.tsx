"use client";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ProductContext } from "@/components/ProductProvider";
import { IProduct } from "@/components/ProductProvider";

export default function products() {
 const {products, setProducts}=useContext(ProductContext)
  return (
    <div className="px-48 py-20">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">List products</h1>
        <Link href={'/add'} className="px-4 py-2 bg-green-500 rounded text-white">Create New product</Link>
      </div>
      <table className="divide-y divide-gray-200 w-full mt-6">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
            >
              rating
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium text-gray-500 uppercase text-end"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products?.map((product:IProduct) => (
            <tr key={product.id}>
              <td className="px-6 py-3 text-gray-800">{product.id}</td>
              <td className="px-6 py-3 text-gray-800">{product.title}</td>
              <td className="px-6 py-3 text-gray-800">{product.price}$</td>
              <td className="px-6 py-3 text-gray-800">{product.description}</td>
              <td className="px-6 py-3 text-gray-800">{product.category}</td>
              <td className="px-6 py-3 text-gray-800">
      
                <Image
                  src={product.image}
                  alt={product.title}
                  
                  width={40}
                  height={40}
                  className="object-fill"
                  quality={100}
                />
              </td>
              <td className="px-6 py-3 text-gray-800">{product.rating.rate}</td>
              <td className="space-x-4 px-6 py-3 text-end">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
