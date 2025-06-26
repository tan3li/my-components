import {ReactNode, RefAttributes} from 'react';
import {classNames} from '../../../utils/classnames.js';

export interface PageLayoutProps extends RefAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export function PageLayout({children, className, ref}: PageLayoutProps) {
    return (
        <div className={classNames('page-layout', className)} ref={ref}>
            {children}
        </div>
    );
}
