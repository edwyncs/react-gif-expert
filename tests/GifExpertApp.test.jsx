import { fireEvent, render, screen, waitFor, toBeInTheDocument } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en <GifExpertApp>', () => {
    test('debe de agregarse categorias con onAddCategory()', async() => {
        const inputValue = 'Saitama';
        const inputValue2 = 'Lol'
        const {container} = render(<GifExpertApp></GifExpertApp>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: inputValue2}});
        fireEvent.submit(form);

        await waitFor(
            () => {expect( container.getElementsByClassName('card-grid').length ).toBe( 2 )}
        );

        expect( container.getElementsByClassName('card-grid').length ).toBe( 2 );

    });
    test('debe mostar el icono empty cuando las categorias esten vacias', () => {
        render(<GifExpertApp></GifExpertApp>);

        expect(screen.getByLabelText('empty')).toBeTruthy();
    });
    test('debe de quitar el icono empty cuando las categorias ya no esten vacias', async() => {
        const inputValue = 'Saitama';
        const {container} = render(<GifExpertApp></GifExpertApp>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        await waitFor(
            () => {expect( container.getElementsByClassName('card-grid').length ).toBe( 1 )}
        );
        
        expect( screen.queryByLabelText('empty')).toBeNull();
    });
});