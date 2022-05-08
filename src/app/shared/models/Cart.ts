import { Product } from "./Product";

export interface Cart{
    userId: string;
    productsId: Array<string> | null;
    price: number;
}