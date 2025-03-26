import {useEffect} from 'react';
import { Product } from '../types/types';
import ProductCard from './ProductCard';
import './Home.css';
import { useProductContext } from '../context/ProductContext';
import {useQuery } from '@tanstack/react-query';
import { fetchProduct, fetchCategory } from '../api/api';

const Home = () => {
    const { state: { products, selectedCategory }, dispatch } = useProductContext();

  const {
     data: productsData,
 
     } =useQuery({
        queryKey:['products'],
        queryFn:fetchProduct,
    });

    const {data:categories} = useQuery({
        queryKey:['categories'],
        queryFn:fetchCategory,
    });

    useEffect(() => {
        if(productsData){
            dispatch({type:'SET_PRODUCTS', payload: productsData.data});
        }
    },[dispatch,productsData]);

    const getfilteredProducts = () => {
        if(selectedCategory) {
            return products?.filter(
                (product:Product) => product.category === selectedCategory
            );
        }
        return products;
    };

    const filteredProducts = getfilteredProducts();

    return (
        <div>
            <select
            onChange={(e)=> 
                dispatch({type:'SET_SELECTED_CATEGORY',payload:e.target.value})
            }
            >
                <option value=''>All Categories</option>
                {categories?.data.map((category) => (
                    <option value={category} key={category}>
                        {category}
                        </option>
                ))}
            </select>
        <div className='container'>
            {filteredProducts.map((product: Product) => (
            <ProductCard product={product} key ={product.id}/>
            ))}
        </div>
        </div>
    );
};
export default Home;