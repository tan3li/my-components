import SeveraLogoWordmark from '../../../icons/severa/severalogowordmark.svg';
import SeveraLogoSymbol from '../../../icons/severa/severalogosymbol.svg';
import {classNames} from '../../../utils/classnames.js';
import {RefAttributes} from 'react';

export const enum SeveraLogoVariant {
    Full = 'full',
    Wordmark = 'wordmark',
    Symbol = 'symbol'
}

interface SeveraLogoProps extends RefAttributes<HTMLDivElement> {
    ariaHidden?: boolean;
    inverted?: boolean;
    showText?: boolean;
    variant?: SeveraLogoVariant;
}

const SEVERA_LOGO_HEIGHT = 24;
const SEVERA_LOGO_SYMBOL_WIDTH = 20;
const SEVERA_LOGO_WORDMARK_WIDTH = 65;

export function SeveraLogo({ariaHidden, inverted, ref, variant = SeveraLogoVariant.Full}: SeveraLogoProps) {
    let icon;

    if (variant === SeveraLogoVariant.Wordmark) {
        icon = (
            <SeveraLogoWordmark
                aria-hidden={ariaHidden}
                aria-label="Severa"
                className={classNames('severa-logo__text', {'severa-logo__text--inverted': inverted})}
                height={SEVERA_LOGO_HEIGHT}
                width={SEVERA_LOGO_WORDMARK_WIDTH}
            />
        );
    } else if (variant === SeveraLogoVariant.Symbol) {
        icon = (
            <SeveraLogoSymbol
                aria-hidden={ariaHidden}
                aria-label="Severa"
                height={SEVERA_LOGO_HEIGHT}
                width={SEVERA_LOGO_SYMBOL_WIDTH}
            />
        );
    } else {
        icon = (
            <>
                <SeveraLogoSymbol aria-label="Severa" height={SEVERA_LOGO_HEIGHT} width={SEVERA_LOGO_SYMBOL_WIDTH} />
                <SeveraLogoWordmark
                    className={classNames('severa-logo__text', {'severa-logo__text--inverted': inverted})}
                    height={SEVERA_LOGO_HEIGHT}
                    width={SEVERA_LOGO_WORDMARK_WIDTH}
                />
            </>
        );
    }

    return (
        <div aria-hidden={ariaHidden} className="severa-logo" ref={ref}>
            {icon}
        </div>
    );
}
