import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/';
import { ThemeButton } from './Button';

describe('Button', () => {
    test('Without props', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With theme CLEAR', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
