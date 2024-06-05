
import React, {useState} from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant'])
        // setCategories(cate => [...cate, 'Valorant'])
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <button onClick={onAddCategory}>Add</button>
            <ol>
                { categories.map( category =>  <li key={category}>{category}</li>) }
            </ol>
        </>
    )
}