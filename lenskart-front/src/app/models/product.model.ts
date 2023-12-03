import { Review } from "./review.model";

export interface Product {
    id?: number;
    name?: string;
    brand?: string;
    category?: string;
    price?: number;
    details?: string;
    frameColor?: string;
    frameShape?: string;
    frameSize?: string;
    frameType?: string;
    reviews?: Review[];
    imagePath?: string;
    
}
