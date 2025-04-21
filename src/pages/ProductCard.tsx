import React from 'react';
import { Product } from '../types/types';
import StarRating from 'react-star-ratings';
import {useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../api/api';
import { useProductContext } from '../context/ProductContext';
import {useEffect} from 'react';
import { useCart } from '../context/CartContext';



const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
 const {dispatch } = useProductContext();
 const { addToCart } = useCart();
 const {
    data: productsData,
   
    } =useQuery({
       queryKey:['products'],
       queryFn:fetchProduct,
   });
     useEffect(() => {
           if(productsData){
               dispatch({type:'SET_PRODUCTS', payload: productsData.data});
           }
       },[dispatch,productsData]);
    
    return(
  
        <div className="product-card">
       
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <StarRating
            rating={product.rating.rate}
            starRatedColor='orange'
            numberOfStars={5}
            name='rating'
            starDimension='20px'
            starSpacing='2px'
            />
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>

     
        
            <button onClick={() => { 
                addToCart(product); 
              
            }}> 
              Add to Cart
            </button>
    
             </div>
          );
};
export default ProductCard;
