import { AnyObject } from '../../../hooks/usechangeparamscallback.js';
import { SelectItemBase } from './selectitem.js';
import { SelectProps } from './selectprops.js';
export interface InlineSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends Omit<SelectProps<P, TItem>, 'helpText' | 'showHelpTextIcon' | 'showSearchIcon'> {
}
export declare function InlineSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ size, ...props }: InlineSelectProps<P, TItem>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=inlineselect.d.ts.map