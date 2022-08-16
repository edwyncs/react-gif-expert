const { render, screen, fireEvent } = require("@testing-library/react");
import { AddCategory } from "../../src/components/AddCategory";

describe('pruebas en <AddCategory>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        const categoria =  {target: {value: 'Saitama'}};
        render(<AddCategory onNewCategory={() => {}}></AddCategory>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, categoria);
        expect(input.value).toBe('Saitama')
        // screen.debug();
    });

    test('debe de llamar onNewCaegory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const event =  {target: {value: inputValue}};
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, event);
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const inputValue = '';
        const event = {target: {value: inputValue}};
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, event);
        fireEvent.submit(form);

        expect( input.value ).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
 });