import { useState } from 'react';   
import { AddCategory, GifGrid, Iconos } from './components';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['']);

    //Metodo que agrega una categoria mediante un submit
    const onAddCategory = (newCategory) => {
        // Difetentes formas de hacerlo:
        // setCategories(categories.concat('Valorant'));
        // setCategories(val => [...val, 'Valorant']);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]); //devuelve las categorias (gifs)
    }

    return(
        <>
            <header>
                {/* titulo */}
                <h1>Gift Expert</h1>
                {/* Imput */}
                <AddCategory 
                    //setCategories = {setCategories}
                    onNewCategory = { onAddCategory }
                />
            </header>
            {/* Listado de Gif */}
            {/* No poner use satate dentro de ifs */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {
                categories.length <= 1 && (<Iconos type = 'empty'/>)
            }
            {categories.map(category => 
                // return <li key={category}>{category}</li>
                (
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                    <GifGrid 
                        key={category}
                        category = {category}
                    />
                )
            )}
                {/* Gif Item */}
        </>
    );
};