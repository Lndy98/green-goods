export interface User{
    id: string;
    email: string;
    phoneNumber: string;
    name:{
        lastname: string;
        firstname: string;
    }
    address:{
        ZIPcode: string;
        town: string;
        street: string;
        houseNumber: string;
    }

}