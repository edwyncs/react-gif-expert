import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
const { GifGrid } = require("../../src/components/GifGrid");

jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en <GifGrid>', () => {
    const categoria = 'one punch';
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={categoria}></GifGrid>);
        // screen.debug();
        expect( screen.getByLabelText('loading'));
    });

    test('debe de mostrar items cuando se cargan las imagenes desde el useFetchGifs()', () => {

        const gifs = [{
            id: 'abc',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },{
            id: 'abcd',
            title: 'Saitama SSJ',
            url: 'https://localhost/saitamassj.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={categoria}></GifGrid>)
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});