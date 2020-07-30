import React,{useState,useEffect} from 'react';
import ProductStock from '../Components/ProductStock';
import ProductList from './ProductList';

 function Product(props) {
    const[products,setProducts] = useState ([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(response=>response.json())
         .then(json=>setProducts(json))
    },[]);


    return (
        <>
            <h1>Product Info</h1>
            
            {products.map(product =>{
           
            return <ProductList key={product.id}{...product}>  {product.id}  {product.name}   {product.price}  {product.manufacuturar} {product.units}{product.time} </ProductList>
        })}

            <ProductStock />
       
        </>
    )
}

export default Product;