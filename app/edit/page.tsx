"use client";
import { IProduct, ProductContext } from "@/components/ProductProvider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Edit() {
  const router = useRouter();
  const { products, setProducts } = useContext<any>(ProductContext);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  let editList: IProduct = {
    id: Number(id),
    title: "",
    price: Number(),
    description: "",
    category: "",
    rating: {
      rate: 0,
      count: 0,
    },
    image: "",
  };

  console.log(products);

  products.map((product: IProduct) => {
    if (Number(id) == product.id) {
      // console.log('ok')
      editList = { ...product };

      //  console.log(editList)
    }
    // return true;
  });

  const [values, setValues] = useState(editList);

  /////////////////////////////////////////
  const handleChanges = (e: any) => {
    if (e.target.name == "rate" || e.target.name == "count") {
      setValues({
        ...values,
        rating: { ...values.rating, [e.target.name]: e.target.value },
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  function handleSubmit(event: any) {
    event.preventDefault();

    const newProducts = products.filter(
      (product: IProduct) => product.id !== Number(id)
    );
    setProducts(
      [...newProducts, values].sort((a, b) => (a.id > b.id ? 1 : -1))
    );

    router.push("/");
  }

  return (
    <div className=" mb-20  mt-20 mx-48 ">
      <h1 className="font-bold text-xl mb-10">Edit Product</h1>
      {values && (
        <form
          className="flex flex-col  rounded-md  p-10 bg-slate-400 space-y-3 shadow-lg"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">title</label>
          <input
            className=" w-[400] border rounded-md p-4"
            type="text"
            name="title"
            placeholder="Enter Title"
            value={values.title}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <label htmlFor="">price</label>
          <input
            className="border rounded-md p-4"
            type="number"
            name="price"
            placeholder="Enter Price"
            value={values.price}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <label htmlFor="">description</label>
          <input
            className="border rounded-md p-4"
            type="text"
            name="description"
            placeholder="Enter Description"
            value={values.description}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <label htmlFor="">category</label>
          <input
            className="border rounded-md p-4"
            type="text"
            name="category"
            placeholder="Enter Category"
            value={values.category}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <label htmlFor="">rate</label>
          <input
            className="border rounded-md p-4"
            type="number"
            name="rate"
            placeholder="Enter rate"
            value={values.rating.rate}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <label htmlFor="">count</label>
          <input
            className="border rounded-md p-4"
            type="number"
            name="count"
            placeholder="Enter count"
            value={values.rating.count}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <label htmlFor="">
            image URL for example
            https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
          </label>

          <input
            className="border rounded-md p-4"
            type="text"
            name="image"
            placeholder="Enter image URL for example https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            value={values.image}
            onChange={(e) => {
              handleChanges(e);
            }}
          ></input>
          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="w-[20%] px-4 py-2 hover:bg-green-400 bg-green-500 text-white rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
