import { SelectItemBase } from '../select/selectitem.js';
import { SelectProps } from '../select/index.js';
import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
export interface TextFieldSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
}
export declare function TextFieldSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>(props: TextFieldSelectProps<P, TItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=textfieldselect.d.ts.map