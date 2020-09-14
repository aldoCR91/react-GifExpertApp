import React, { useState } from 'react'
import PropTypes from 'prop-types'


function AddCategories({ setCategories }) {

    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleOnChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){
            
            setCategories( categories => [ inputValue, ...categories ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleOnChange }
            />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories
