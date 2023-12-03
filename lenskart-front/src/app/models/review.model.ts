import { Customer } from "./customer.model";
import { Product } from "./product.model";

export interface Review {
    id?: number;
    product?: Product;
    customer?: Customer;
    datePosted?: Date;
    rating?: number;
    review?: string;
    status?: string;
}