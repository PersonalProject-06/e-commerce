import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data"    
const Product = () => {
    const router = useRouter()

    const {slug} = router.query
    const product = data?.products?.find(prod=>prod.slug === slug)
    if(!product){
      return (<div>
        Product not found
      </div>
      )
    } else {
      return (<div><h1>{product?.name}</h1></div>)
    } 
   
};

export default Product;
