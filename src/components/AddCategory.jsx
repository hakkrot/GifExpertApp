import {useState} from "react";

export const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const OnSubmit = (event) => {
        event.preventDefault()
        setCategories( cate => [inputValue, ...cate])
        setInputValue('')
    }

    return(
        <form onSubmit={ OnSubmit }>
            <input
                type="text"
                placeholder="Buscar gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}