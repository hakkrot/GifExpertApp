
import React, {useState} from 'react'
import {AddCategory} from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory)
        setCategories([...categories, newCategory])
        // setCategories([newCategory, ...categories])
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={ onAddCategory }
            />
            <ol>
                { categories.map( category =>  <li key={category}>{category}</li>) }
            </ol>
        </>
    )
}