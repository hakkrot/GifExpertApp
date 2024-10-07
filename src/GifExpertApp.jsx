
import React, {useState} from 'react'
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([...categories, newCategory])
        //[...categories]: El operador de propagación (spread operator) se usa para crear una copia superficial de la lista actual de categories. Esto es necesario porque en React debes evitar modificar el estado directamente (inmutabilidad). En lugar de eso, debes crear una nueva versión de la lista con los cambios.
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( (category) =>
                    <GifGrid key={category} category={ category } />
                )
            }
        </>
    )
}