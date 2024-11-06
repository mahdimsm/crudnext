'use client'
import axios from 'axios';
import { createContext, useEffect, useMemo, useState } from 'react'

export type IProduct= {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  interface Rating {
    rate: number;
    count: number;
  }



export const ProductContext = createContext({
    products: [],
    setProducts: ()=>{}
})

export default function ProductProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [products, setProducts] = useState<IProduct[]>();
    const fetchRecords = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    useEffect(() => {
      fetchRecords();
    }, []);

    const value :{ products: IProduct[], setProducts:()=>{} }={
        products
        ,setProducts
    };

  
    
  

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}