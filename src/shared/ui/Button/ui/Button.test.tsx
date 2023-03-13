import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/';
import { ButtonTheme } from './Button';

describe('Button', () => {
    test('Without props', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With theme CLEAR', () => {
        render(<Button theme={ButtonTheme.Clear}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
