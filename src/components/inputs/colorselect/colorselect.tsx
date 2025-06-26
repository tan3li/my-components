import {Select, SelectItemBase} from '../select/index.js';
import {SelectProps} from '../select/selectprops.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {ColorSwatch} from 'react-aria-components';
import {SelectOptionContent} from '../select/selectoptioncontent.js';

export interface ColorSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends SelectProps<P, TItem> {}

export function ColorSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>(
    props: ColorSelectProps<P, TItem>
) {
    return (
        <Select
            {...props}
            renderItemContent={(optionContentProps) => {
                const item = optionContentProps.item;

                return (
                    <SelectOptionContent
                        {...optionContentProps}
                        bodyPrefix={
                            <ColorSwatch className="color-select-option__color-swatch" color={item.value as string} />
                        }
                    />
                );
            }}
            renderStartContent={(selectedItem) => {
                if (selectedItem) {
                    return (
                        <ColorSwatch
                            className="color-select-option__color-swatch"
                            color={selectedItem.value as string}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
