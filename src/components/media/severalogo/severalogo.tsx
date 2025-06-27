import tan3liLogoWordmark from '../../../icons/tan3li/tan3lilogowordmark.svg';
import tan3liLogoSymbol from '../../../icons/tan3li/tan3lilogosymbol.svg';
import {classNames} from '../../../utils/classnames.js';
import {RefAttributes} from 'react';

export const enum tan3liLogoVariant {
    Full = 'full',
    Wordmark = 'wordmark',
    Symbol = 'symbol'
}

interface tan3liLogoProps extends RefAttributes<HTMLDivElement> {
    ariaHidden?: boolean;
    inverted?: boolean;
    showText?: boolean;
    variant?: tan3liLogoVariant;
}

const tan3li_LOGO_HEIGHT = 24;
const tan3li_LOGO_SYMBOL_WIDTH = 20;
const tan3li_LOGO_WORDMARK_WIDTH = 65;

export function tan3liLogo({ariaHidden, inverted, ref, variant = tan3liLogoVariant.Full}: tan3liLogoProps) {
    let icon;

    if (variant === tan3liLogoVariant.Wordmark) {
        icon = (
            <tan3liLogoWordmark
                aria-hidden={ariaHidden}
                aria-label="tan3li"
                className={classNames('tan3li-logo__text', {'tan3li-logo__text--inverted': inverted})}
                height={tan3li_LOGO_HEIGHT}
                width={tan3li_LOGO_WORDMARK_WIDTH}
            />
        );
    } else if (variant === tan3liLogoVariant.Symbol) {
        icon = (
            <tan3liLogoSymbol
                aria-hidden={ariaHidden}
                aria-label="tan3li"
                height={tan3li_LOGO_HEIGHT}
                width={tan3li_LOGO_SYMBOL_WIDTH}
            />
        );
    } else {
        icon = (
            <>
                <tan3liLogoSymbol aria-label="tan3li" height={tan3li_LOGO_HEIGHT} width={tan3li_LOGO_SYMBOL_WIDTH} />
                <tan3liLogoWordmark
                    className={classNames('tan3li-logo__text', {'tan3li-logo__text--inverted': inverted})}
                    height={tan3li_LOGO_HEIGHT}
                    width={tan3li_LOGO_WORDMARK_WIDTH}
                />
            </>
        );
    }

    return (
        <div aria-hidden={ariaHidden} className="tan3li-logo" ref={ref}>
            {icon}
        </div>
    );
}
