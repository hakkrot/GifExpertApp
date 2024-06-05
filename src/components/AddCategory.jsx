import {useState} from "react";

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const OnSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
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