export type FormDonationCreateDto = {
    Dn_Name: string;
    Dn_Lastname1: string;
    Dn_Lastname2: string;
    Dn_Cedula: number;
    Dn_Phone: string;
    Dn_Email: string;
    Delivery_date: Date;
    Id_DonationType: number;
    Id_MethodDonation: number;
};