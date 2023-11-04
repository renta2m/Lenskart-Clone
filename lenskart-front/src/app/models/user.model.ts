export interface User {
    id?: number;
    userId?: string;
    password?: string;
    userRole?: string;
}

export interface Customer {
    id?: number;
    firstName?: string;
    lastName?: string;
    apartmentNo?: string;
    streetName?: string;
    city?: string;
    state?: string;
    email?: string;
    zipCode?: string;
    phoneNumber?: string;
    createdDate?: Date;
    user?: User;
}