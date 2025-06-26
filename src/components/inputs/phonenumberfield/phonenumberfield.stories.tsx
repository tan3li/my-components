import {Meta, StoryObj} from '@storybook/react-webpack5';
import {DATA_ATTRIBUTE_PARAM_KEY} from '../../../tools/dataattributeaddingtool/constants.js';
import {emptyFn} from '../../../utils/functionhelper.js';
import {PhoneNumberField} from './phonenumberfield.js';
import {userEvent, waitFor, within, expect, fn} from 'storybook/test';

const meta = {
    component: PhoneNumberField,
    decorators: [
        (Story) => (
            <div style={{padding: '5px'}}>
                <Story />
            </div>
        )
    ],
    parameters: {
        actions: {
            handles: ['onChange']
        },
        layout: 'centered',
        controls: {
            sort: 'requiredFirst'
        },
        [DATA_ATTRIBUTE_PARAM_KEY]: {
            querySelector: '.text-field__content'
        }
    },
    tags: ['autodocs'],
    title: 'Components/Inputs/PhoneNumberField'
} satisfies Meta<typeof PhoneNumberField>;

export default meta;
type Story = StoryObj<typeof PhoneNumberField>;

export const Playground: Story = {
    args: {
        changeCallback: emptyFn,
        changeParams: {field: 'foo'},
        prefixLabel: 'Country calling code',
        favoriteCountryCodes: ['FI', 'SE'],
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Phone number',
        value: ''
    },
    parameters: {
        docs: {
            description: {
                story: 'PhoneNumberField component, be my guest and play with it!'
            }
        }
    }
};

export const ChangeCallback: Story = {
    args: {
        changeCallback: fn(),
        changeParams: {field: 'foo'},
        prefixLabel: 'Country calling code',
        favoriteCountryCodes: ['FI', 'SE'],
        isDisabled: false,
        isReadOnly: false,
        isRequired: false,
        label: 'Field label',
        value: '+3581234567'
    },
    parameters: {
        docs: {
            description: {
                story: 'Test changeCallback with changeParams.'
            }
        }
    },
    play: async ({args, canvasElement}) => {
        const canvas = within(canvasElement);
        const expandBtn = canvas.getByRole('button');

        // Open dropdown and select first item
        await userEvent.click(expandBtn);

        let popover = canvasElement.parentNode?.querySelector('.select__popover'),
            options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[2]);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '+931234567'
            })
        );

        // Open dropdown, search for "+46" and select first item
        await userEvent.click(expandBtn);

        const input = canvasElement.querySelector('.select__input')!;

        await userEvent.clear(input);
        await userEvent.type(input, '+46');

        popover = canvasElement.parentNode?.querySelector('.select__popover');
        options = popover?.querySelectorAll('.select-option') ?? [];

        await userEvent.click(options[0]);

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '+461234567'
            })
        );

        await userEvent.clear(canvasElement.querySelector('.text-field__input-field')!);
        await userEvent.type(canvasElement.querySelector('.text-field__input-field')!, '401234567');

        await userEvent.tab();

        await waitFor(() =>
            expect(args.changeCallback).toHaveBeenCalledWith({
                field: 'foo',
                value: '+358401234567'
            })
        );
    }
};
