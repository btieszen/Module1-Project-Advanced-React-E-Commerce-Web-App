import axios from 'axios';
import { AxiosResponse } from 'axios';
import  { Product,Category } from '../types/types';

const apiClient =axios.create({
    baseURL:'https://fakestoreapi.com'
  })

  export const fetchProduct = (): Promise<AxiosResponse<Product[]>> => apiClient.get<Product[]>('/products')
  export const fetchCategory = (): Promise<AxiosResponse<Category[]>> => apiClient.get<Category[]>('/products/categories')