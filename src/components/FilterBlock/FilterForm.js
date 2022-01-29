import { Input } from '../Input/Input';
import { useState } from 'react';

const objectFormData = {
  date_from_1: '',
  date_to_1: '',
  date_from_2: '',
  date_to_2: '',
  name_user_1: '',
  phone_1: '',
  name_user_2: '',
  phone_2: ''
}

export const FilterForm = ({isOpenProps}) => {
  const [textInput, setTextInput] = useState(objectFormData);

  const handleInput = (e) => {
    setTextInput({...textInput, [e.target.name]: e.target.value});
  }

  return (
    isOpenProps &&
      <form className='form' action='#'>
        <Input placeholderProps="Дата от" handleInput={handleInput} nameProps="date_from_1" />
        <Input placeholderProps="Дата до" handleInput={handleInput} nameProps="date_to_1" />
        <Input placeholderProps="Дата от" handleInput={handleInput} nameProps="date_from_2" />
        <Input placeholderProps="Дата до" handleInput={handleInput} nameProps="date_to_2" />
        <Input placeholderProps="Имя клиента" handleInput={handleInput} nameProps="name_user_1" />
        <Input placeholderProps="Телефон" typeProps="tel" handleInput={handleInput} nameProps="phone_1" />
        <Input placeholderProps="Имя клиента" handleInput={handleInput} nameProps="name_user_2" />
        <Input placeholderProps="Телефон" typeProps="tel" handleInput={handleInput} nameProps="phone_2" />
      </form>
  )
}
