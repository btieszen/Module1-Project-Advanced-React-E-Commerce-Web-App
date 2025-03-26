export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quanity?: number;
    createdAt: Date;
    updatedAT: Date;
    rating:{
        rate:number;
        count: number;
    }
    }

    export type Category=string;
    export type AddToCart=number;