import {render, screen} from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";
import { describe, it, expect } from 'vitest';

describe('button tests', () => {
    it('should render base button when nothing is passed', () => { 
        render(<Button>test</Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color: rgb(255, 255, 255)');
     })
    it('should render accept button', () => { 
        render(<Button
            buttonType={BUTTON_TYPE_CLASSES.accept}
          ></Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('color: rgb(0, 128, 0)');
     })
    it('should render reject button', () => { 
        render(<Button
            buttonType={BUTTON_TYPE_CLASSES.reject}
          ></Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('color: rgb(198, 0, 0);');
     })
    it('should be disabled when isLoading is true', () => { 
        render(<Button
        isLoading={true}
            buttonType={BUTTON_TYPE_CLASSES.reject}
          ></Button>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
     })

})