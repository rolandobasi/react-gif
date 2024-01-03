import { useState } from 'react';
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setCategories(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length < 2 ) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <>
            <form onSubmit={ (event) => onSubmit(event)}>
                <input
                    type="text"
                    placeholder={'Buscar...'}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </form>
        </>
    )
}