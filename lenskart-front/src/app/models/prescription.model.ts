import { Customer } from "./customer.model";

export interface Prescription {
    id?: number;
    customer?: Customer;
    odPower?: number;
    odCyl?: number;
    odAxis?: number;
    odBC?: number;
    odDia?: number;
    osPower?: number;
    osCyl?: number;
    osAxis?: number;
    osBC?: number;
    osDia?: number;
    createdDate?: Date;
}