import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const {result} = renderHook( () => useFetchGifs('one punch') );
        const {images, isLoading} = result.current;
        // console.log(result);

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe de regresar un arreglo de imagenes e isLoandig en false', async() => {
        const {result} = renderHook( () => useFetchGifs('one punch') ); 
        
        await waitFor(
            () => {expect(result.current.images.length).toBeGreaterThan(0); /*console.log(result.current.images);*/}
        );
            
        const {images, isLoading} = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
});