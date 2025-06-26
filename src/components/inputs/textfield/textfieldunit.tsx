import {ReactNode, RefAttributes} from 'react';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';

export interface TextFieldUnitProps extends RefAttributes<HTMLSpanElement> {
    children: ReactNode;
    id?: string;
    size?: Size.md | Size.lg;
}

export function TextFieldUnit({children, id, ref, size = Size.lg}: TextFieldUnitProps) {
    return (
        <Label className="text-field__unit" id={id} ref={ref} size={size}>
            {children}
        </Label>
    );
}
