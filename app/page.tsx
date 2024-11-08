"use client";
import Link from "next/link";
import { useContext,  useState } from "react";

import Image from "next/image";
import { ProductContext } from "@/components/ProductProvider";
import { IProduct } from "@/components/ProductProvider";

type a = {
  current: IProduct;
  lists: IProduct[];
  setList: (...any: any) => {};
};

export default function products() {
  const { products, setProducts } = useContext<any>(ProductContext);
  const [updateState, setUpdateState] = useState<number>(-1);
  return (
    <div className="px-48 py-20">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">List products</h1>
        <Link
          href={"/add"}
          className="px-4 py-2 bg-green-500 rounded text-white"
        >
          Create New product
        </Link>
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
              rate
            </th>
            <th
              scope="col"
              className=" py-3 text-center font-medium text-gray-500 uppercase"
            >
              count
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
          {products.map((product: IProduct) => (
            <tr key={product.id}>
              <td scope="col" className="px-6 py-3 text-gray-800">
                {product.id}
              </td>
              <td scope="col" className="px-6 py-3 text-gray-800">
                {product.title}
              </td>
              <td scope="col" className="px-6 py-3 text-gray-800">
                {product.price}$
              </td>

              <td scope="col" className="px-6 py-3 text-gray-800">
                {product.category}
              </td>
              <td scope="col" className="px-6 py-3 text-gray-800">
                <Image
                  src={product.image}
                  alt={product.title}
                  height={40}
                  width={40}
                  className="w-full h-auto"
                />
              </td>
              <td className="px-6 py-3 text-gray-800">{product.rating.rate}</td>
              <td className="px-6 py-3 text-gray-800">
                {product.rating.count}
              </td>
              <td className="flex items-center justify-center space-x-2 mt-4">
                <button>
                  <Link
                    href={`/edit?id=${product.id}`}
                    className="px-4 py-2 bg-green-500 rounded text-white"
                  >
                    Edit
                  </Link>
                </button>
                <button
                  className="bg-red-600 px-4 py-2  rounded text-white"
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id: number) {
    const newProducts = products.filter(
      (product: IProduct) => product.id !== id
    );
    setProducts(newProducts);
  }
}
