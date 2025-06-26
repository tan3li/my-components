import {Select} from '../select/select.js';
import {SelectItemBase} from '../select/selectitem.js';
import {SelectProps} from '../select/index.js';
import {AnyObject} from '../../../hooks/usechangeparamscallback.js';

export interface TextFieldSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>>
    extends SelectProps<P, TItem> {}

export function TextFieldSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>(
    props: TextFieldSelectProps<P, TItem>
) {
    return <Select {...props} className="text-field__select" isPlain={true} isSearchable={false} menuWidth="auto" />;
}
