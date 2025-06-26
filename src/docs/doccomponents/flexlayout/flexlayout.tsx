import './flexlayout.scss';
import {CSSProperties, ReactNode} from 'react';

export interface FlexLayoutProps {
    children: ReactNode;
    direction?: CSSProperties['flexDirection'];
    gap?: CSSProperties['gap'];
}

export function FlexLayout({children, direction = 'row', gap}: FlexLayoutProps) {
    return (
        <div className="flex-layout" style={{flexDirection: direction, gap}}>
            {children}
        </div>
    );
}
