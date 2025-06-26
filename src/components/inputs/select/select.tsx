import {AnyObject} from '../../../hooks/usechangeparamscallback.js';
import {SelectItemBase} from './selectitem.js';
import {SelectProps} from './selectprops.js';
import {ComboBox} from './combobox.js';
import {SelectBox} from './selectbox.js';

export function Select<P extends AnyObject, TItem extends SelectItemBase<TItem>>({
    isSearchable = true,
    ...props
}: SelectProps<P, TItem>) {
    // eslint-disable-next-line sonarjs/no-selector-parameter
    return isSearchable ? <ComboBox {...props} /> : <SelectBox {...props} />;
}
