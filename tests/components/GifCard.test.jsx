const { render, screen } = require("@testing-library/react");
const { GifCard } = require("../../src/components/GifCard");

describe('Pruebas del componente GifItem', () => { 
    const title = 'titulo';
    const url = 'http://www.one-punch.com/one.gif';
    
    test('debe hacer match con el snapshot', () => {
        const {container} = render (<GifCard title={title} url={url}></GifCard>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render (<GifCard title={title} url={url}></GifCard>);
        //screen.debug();   //muestra el codigo HTML
        //expect(screen.getByRole('img').src).toBe(url)     //para comparar el url del html con el snapshot
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(title).toBe(alt);
    });
    
    test('debe de mostrar el titulo en el componente', () => { 
        render (<GifCard title={title} url={url}></GifCard>);
        expect(screen.getByText(title)).toBeTruthy();
     })
 });