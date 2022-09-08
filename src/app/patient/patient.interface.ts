export interface PatientAccount {
    ptName: string;
    ptAge: number;
    ptGmail: string;
    ptMobile: number;
    ptUsername: string;
    ptPassword: string;
}

export interface PatientAuthLoginInterface {
    ptUsername: string;
    ptPassword: string;
}