export interface PatientAccount {
    ptId?: number;
    ptName?: string;
    ptAge?: number;
    ptGmail?: string;
    ptMobile?: number;
    ptUsername?: string;
    ptPassword?: string;
    appointments?: []
}

export interface PatientAuthLoginInterface {
    ptUsername?: string;
    ptPassword?: string;
}