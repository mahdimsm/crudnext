"use client";
import { IProduct, ProductContext } from "@/components/ProductProvider";
import { useRouter } from "next/navigation";
import {  toast } from 'react-toastify';
import { useContext, useState } from "react";
import axios from "axios";

export default function Add() {
  const router = useRouter();
  const { products, setProducts } = useContext<any>(ProductContext);
  let id: number = 0;
  products.map((product: IProduct) => {
    if (id > product.id) {
      id = id;
    } else {
      id = product.id + 1;
    }
  });

  const [values, setValues] = useState({
    id: id,
    title: "",
    price: Number(),
    description: "",
    category: "",
    rating: {
      rate: Number(),
      count: Number(),
    },
    image: "",
  });

  const addRecord = async (product:IProduct) => {
    const response = await axios.post("https://fakestoreapi.com/products",product);
     if(response.status==200){
      alert();
     }
  };
  const alert=()=>{
    toast.success("Product successffully added.",{
      position:"top-center"
    })
  }

  const handleChanges = (e: any) => {
    if (e.target.name == "rate" || e.target.name == "count") {
      setValues({
        ...values,
        rating: { ...values.rating, [e.target.name]: e.target.value },
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    console.log(values);
  };

  function handleSubmit(event: any) {
    event.preventDefault();

    const newlist = {
      id: id,
      title: values.title,
      price: values.price,
      description: values.description,
      category: values.category,
      rating: {
        rate: values.rating.rate,
        count: values.rating.count,
      },
      image: values.image,
    };
    setProducts((prevList: any) => {
      return prevList.concat(newlist);
    });
    addRecord(newlist);
    setValues({
      id: id,
      title: "",
      price: Number(),
      description: "",
      category: "",
      rating: {
        rate: Number(),
        count: Number(),
      },
      image: "",
    });
    
    
    router.push("/");
    // console.log(values)
  }




  return (
    <div className=" mb-20  mt-20 mx-48 ">
      <h1 className="font-bold text-xl mb-10">Add Product</h1>
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
          placeholder="Enter image URL"
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
    </div>
  );
}
