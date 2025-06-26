import {Icon} from '../../media/icon/icon.js';
import {iconNames} from '../../media/icon/icons.js';
import {Label} from '../../text/label/label.js';
import {Size} from '../../../constants/size.js';
import {RefAttributes, useImperativeHandle, useRef} from 'react';
import {useButton} from 'react-aria';
import {useTranslateCommon} from '../../../hooks/translations/usetranslatecommon.js';

export interface TextFieldVisibilityToggleProps extends RefAttributes<HTMLDivElement> {
    isVisible: boolean;
    onPress: () => void;
}

export function TextFieldVisibilityToggle({isVisible, onPress, ref: outerRef}: TextFieldVisibilityToggleProps) {
    const translateCommon = useTranslateCommon();
    const ref = useRef<HTMLDivElement>(null);
    const {buttonProps} = useButton(
        {
            onPress,
            elementType: 'div'
        },
        ref
    );

    useImperativeHandle(outerRef, () => ref.current!, []);

    return (
        <div {...buttonProps} className="text-field__action" ref={ref}>
            <Icon name={isVisible ? iconNames.VisibilityOff : iconNames.Visibility} />
            <Label size={Size.lg}>{translateCommon(isVisible ? 'hide' : 'show')}</Label>
        </div>
    );
}
