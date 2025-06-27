import { ReactNode } from 'react';
export interface TypographyItem {
    sample: ReactNode;
    token: string;
    usage: string;
}
export type PartialTypographyItem = Omit<TypographyItem, 'token'>;
export declare const headingTypography: TypographyItem[];
export declare const bodyTypography: TypographyItem[];
export declare const bodyStrongTypography: TypographyItem[];
export declare const labelTypography: TypographyItem[];
export declare const labelStrongTypography: TypographyItem[];
export declare const labelStrongUnderlineTypography: TypographyItem[];
export declare const titleTypography: TypographyItem[];
export declare const titleStrongTypography: TypographyItem[];
//# sourceMappingURL=typographydata.d.ts.map