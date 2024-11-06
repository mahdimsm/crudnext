'use client'
import { ProductContext } from "@/components/ProductProvider"
import { useContext, useRef } from "react"


export default function Add() {

    const titleRef = useRef();
    const priceRef = useRef();
    const desRef = useRef();
    const catRef = useRef();
    const rateRef = useRef();
    const countRef = useRef();
    const imageRef = useRef();


    const {products, setProducts}=useContext(ProductContext);
 

    function handleSubmit(event:any) {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const price = event.target.elements.price.value;
        const description = event.target.elements.description.value;
        const category = event.target.elements.category.value;
        const rate = event.target.elements.rate.value;
        const count = event.target.elements.count.value;
        const image = event.target.elements.image.value;
        const newlist = {
          id: products.length===0 ? 1 :products.length + 1,
          title,
          price,
          description,
          category,
          rating:{
            rate :rate,
            count:count
          },
          image
        };
        setProducts((prevList:any) => {
          return prevList.concat(newlist);
        });
        titleRef.current.value = "";
        priceRef.current.value = "";
        desRef.current.value = "";
        catRef.current.value = "";
        rateRef.current.value = "";
        countRef.current.value = "";
        imageRef.current.value = "";
      }







  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter Title"
        ref={titleRef}
      ></input>
      <input
        type="number"
        name="price"
        placeholder="Enter Price"
        ref={priceRef}
      ></input>
       <input
        type="text"
        name="description"
        placeholder="Enter Description"
        ref={desRef}
      ></input>
       <input
        type="text"
        name="category"
        placeholder="Enter Category"
        ref={catRef}
      ></input>
       <input
        type="number"
        name="rate"
        placeholder="Enter rate"
        ref={rateRef}
      ></input>
        <input
        type="number"
        name="count"
        placeholder="Enter count"
        ref={countRef}
      ></input>
         <input
        type="text"
        name="image"
        placeholder="Enter image"
        ref={imageRef}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

