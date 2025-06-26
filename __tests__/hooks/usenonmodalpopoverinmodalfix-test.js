import {useRef, useState} from 'react';
import {Button, ButtonStyle, ButtonVariant, Drawer, Popover, Size} from '../../src/index.js';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {mockResizeObserver} from 'jsdom-testing-mocks';
import {useNonModalPopoverInModalFix} from '../../src/hooks/usenonmodalpopoverinmodalfix.js';

function NonModalPopoverInModal() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);

    useNonModalPopoverInModalFix(isPopoverOpen, triggerRef, popoverRef);

    return (
        <>
            <Button
                onPress={() => setIsDrawerOpen(!isDrawerOpen)}
                size={Size.lg}
                style={ButtonStyle.Fill}
                variant={ButtonVariant.Accent}>
                Drawer button
            </Button>
            <Drawer isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen} title="Test">
                <Button
                    onPress={() => setIsPopoverOpen(true)}
                    ref={triggerRef}
                    style={ButtonStyle.Fill}
                    variant={ButtonVariant.Neutral}>
                    Popover button
                </Button>
                <Popover
                    aria-label="Popover"
                    isNonModal={true}
                    isOpen={isPopoverOpen}
                    onOpenChange={setIsPopoverOpen}
                    ref={popoverRef}
                    triggerRef={triggerRef}>
                    This is a popover
                </Popover>
            </Drawer>
        </>
    );
}

mockResizeObserver();

describe('useNonModalPopoverInModalFix', () => {
    it('Should not hide open popover from screen readers', async () => {
        render(<NonModalPopoverInModal />);

        const drawerButton = screen.getByRole('button', {name: 'Drawer button'});

        await userEvent.click(drawerButton);

        const popoverButton = screen.getByRole('button', {name: 'Popover button'});

        await userEvent.click(popoverButton);

        const popover = screen.getByRole('dialog', {name: 'Popover'}).parentNode;

        expect(popover.getAttribute('aria-hidden')).toBe(null);
    });
});
