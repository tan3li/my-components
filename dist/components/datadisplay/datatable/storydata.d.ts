export interface Project {
    guid: string;
    name: string;
    customerOwner: {
        guid: string;
        name: string;
    };
    deadline: string;
    workHours: number;
    workHoursEstimate: number;
    progress: number;
    subRows?: Project[];
}
export declare const projects: Project[];
export declare const expandableProjects: Project[];
export interface InvoiceRow {
    guid: string;
    description: string;
    invoiceRowGuid?: string;
    level: number;
    quantity: number;
    subRows?: InvoiceRow[];
    unit: string;
    unitPrice: string;
    vat: string;
    total: string;
}
export declare const invoiceRowsWithSubRows: InvoiceRow[];
export interface Phase {
    guid: string;
    name: string;
    startDate: string;
    deadline: string;
    workHours: number;
    workHoursEstimate: number;
    subRows?: Phase[];
}
export declare const phases: Phase[];
//# sourceMappingURL=storydata.d.ts.map