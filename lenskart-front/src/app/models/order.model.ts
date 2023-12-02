import { Customer } from "./customer.model";
import { Employee } from "./employee.model";
import { Prescription } from "./prescription.model";
import { Product } from "./product.model";

export interface Order {
    id?: number;
    ordersDate?: Date;
    customer?: Customer;
    employee?: Employee;
    prescription?: Prescription;
    cardNumber?: string;
    cvv?: string;
    expiryDate?: Date;
    nameOnCard?: string;
    activeYN?: string;
    status?: string;
    totalPrice?: number;
    orderItems?: OrderItem[];
}

export interface OrderItem {
    orderId?: number;
    product?: Product;
    unitPrice?: number;
    quantity?: number;
    status?: string;
    shipper?: string;
    shippingDate?: Date;
    aptNo?: string;
    streetName?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}