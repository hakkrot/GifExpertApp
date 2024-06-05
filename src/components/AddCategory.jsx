import {useState} from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const OnSubmit = (event) => {
        event.preventDefault()
        onNewCategory(inputValue);
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