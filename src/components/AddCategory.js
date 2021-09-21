import React, { useState } from 'react';
import PropTypes from "prop-types";
export const AddCategory = ({setCategories}) => {

        const [inputValue, setInputValue] = useState(''); // EXPLICACION SI NO LE PASO NADA LE PASO UNDEFINED; QUE DA ERROR
                                                        // PARA EVITARLO MANDAMOS SIMPLEMENTE UN STRING VACIO          

        const handleInputChange = (e)=> {
            setInputValue(e.target.value);
        }

        const handleSubmit  = (e) => {
            e.preventDefault();
            if(!inputValue){ 
                // si no hay nada escrito
                // setCategories((e)=> {
                //     // e.pop();
                //     // return [...e];
                // });
                setCategories([]);
            }
            console.log('en AddCategory__ el inputValue',inputValue);
            if(inputValue.trim().length>0){
                setCategories((e)=> [inputValue,...e]);
                setInputValue('');
            }else{
                // setCategories((e)=> {
                //     e.pop();
                //     return [...e];
                // })
            }
        }


            return (
                <form onSubmit={handleSubmit}>
                    <h1> {inputValue} </h1>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </form>
            )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
// PropTypes
