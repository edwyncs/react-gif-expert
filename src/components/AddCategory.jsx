import { PropTypes } from 'prop-types';
import { useState } from 'react'; 

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    // console.log(target.value);
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    const newInput = inputValue.trim();
    if (newInput.trim().length <= 0) return;

    //setCategories(category => [inputValue, ...category]);
    onNewCategory(newInput);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <div className='search_form'>
      <input
            type="text"
            placeholder="Buscar gifs"
            className='search_box'
            value={inputValue}
            onChange={onInputChange}
        />
        <div className='btn_buscar' onClick={onSubmit}>
          <p>Buscar</p>
        </div>
      </div>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};