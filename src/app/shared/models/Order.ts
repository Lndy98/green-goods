import { Product } from "./Product";

export interface Order{
    id: string;
    userId: string;
    products: Array<Product>;
    price: number;
    date: string;
}