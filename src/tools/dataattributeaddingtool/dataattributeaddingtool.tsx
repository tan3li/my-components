// @ts-expect-error TS6133 React needs to be imported
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useCallback, useEffect} from 'react';
import {ButtonIcon, CheckIcon} from '@storybook/icons';
import {IconButton, WithTooltip, TooltipLinkList} from 'storybook/internal/components';
import {useGlobals, useParameter} from 'storybook/manager-api';
import {styled, color} from 'storybook/theming';
import {DATA_ATTRIBUTE_PARAM_KEY, DATA_ATTRIBUTES} from './constants.js';
import {addDataAttributes} from './helpers.js';

const LinkTitle = styled.span<{active?: boolean}>(({active}) => ({
    color: active ? color.secondary : 'inherit'
}));

const LinkIcon = styled(CheckIcon)<{active?: boolean}>(({active}) => ({
    opacity: active ? 1 : 0,
    path: {fill: active ? color.secondary : 'inherit'}
}));

const options = Object.keys(DATA_ATTRIBUTES).sort((a, b) => a.localeCompare(b)) as Array<keyof typeof DATA_ATTRIBUTES>;

export const DataAttributeAddingTool = () => {
    const [globals, updateGlobals] = useGlobals();
    const dataAttributeParams: {querySelector: string | null} = useParameter(DATA_ATTRIBUTE_PARAM_KEY, {
        querySelector: null
    });
    const dataAttribute = globals[DATA_ATTRIBUTE_PARAM_KEY];

    const isActive = useCallback(
        (option: keyof typeof DATA_ATTRIBUTES) => {
            if (!dataAttribute) {
                return false;
            }

            return dataAttribute[option] === true;
        },
        [dataAttribute]
    );

    const toggleOption = useCallback(
        (option: keyof typeof DATA_ATTRIBUTES) => () => {
            const isDataAttributeActive = !isActive(option);

            updateGlobals({
                [DATA_ATTRIBUTE_PARAM_KEY]: {
                    ...dataAttribute,
                    [option]: isDataAttributeActive
                }
            });
        },
        [dataAttribute]
    );

    useEffect(() => {
        const dataAttributes = Object.keys(dataAttribute ?? {}).filter((key) => dataAttribute[key] === true);

        if (dataAttributeParams.querySelector) {
            addDataAttributes(dataAttributeParams.querySelector, dataAttributes);
        }
    }, [dataAttribute]);

    const renderTooltip = () => (
        <TooltipLinkList
            links={options.map((option) => ({
                id: option,
                title: <LinkTitle active={isActive(option)}>{option}</LinkTitle>,
                right: <LinkIcon active={isActive(option)} height={12} width={12} />,
                onClick: toggleOption(option),
                active: isActive(option)
            }))}
        />
    );

    return dataAttributeParams.querySelector ?
            <WithTooltip placement="top" tooltip={renderTooltip} trigger="click">
                <IconButton
                    active={options.some(isActive)}
                    key="data-attribute-tool"
                    title="Select data-attribute to be given to the component">
                    <ButtonIcon />
                </IconButton>
            </WithTooltip>
        :   null;
};
