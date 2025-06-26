import './guidebox.scss';
import {ReactNode} from 'react';
import {Icon, iconNames, IconSize, Label} from '../../../components/index.js';
import {Size} from '../../../constants/index.js';

export const enum GuideBoxVariant {
    Success = 'success',
    Danger = 'danger'
}

export interface GuideBoxProps {
    children: ReactNode;
    label: string;
    variant: GuideBoxVariant;
}

export function GuideBox({children, label, variant}: GuideBoxProps) {
    return (
        <div className={`sb-unstyled guide-box guide-box--${variant}`}>
            <div className="guide-box__label">
                <Icon
                    className="guide-box__icon"
                    name={variant === GuideBoxVariant.Danger ? iconNames.CancelFilled : iconNames.CheckCircleFilled}
                    size={IconSize.LG}
                />
                <Label className="guide-box__label-text" size={Size.lg}>
                    <strong>{label}</strong>
                </Label>
            </div>
            {children}
        </div>
    );
}

export interface GuideBoxVariantProps extends Omit<GuideBoxProps, 'label' | 'variant'> {}

export function Dos(props: GuideBoxVariantProps) {
    return <GuideBox {...props} label="Do" variant={GuideBoxVariant.Success} />;
}

export function Donts(props: GuideBoxVariantProps) {
    return <GuideBox {...props} label="Don't" variant={GuideBoxVariant.Danger} />;
}
