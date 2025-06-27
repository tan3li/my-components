import './colortokenlist.scss';
interface Token {
    reference: string;
    value: string;
}
interface ColorTokenListProps {
    getGroup?: (tokenKey: string, token: Token) => string;
    groupOrder?: string[];
    title: string;
    tokens: {
        [key: string]: Token;
    };
}
export declare function ColorTokenList({ getGroup, groupOrder, title, tokens }: ColorTokenListProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=colortokenlist.d.ts.map