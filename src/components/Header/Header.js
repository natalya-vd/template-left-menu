import './Header.css';
import { Input } from '../Input/Input';
import { useState } from 'react';

export const Header = () => {
  const [textInput, setTextInput] = useState('');

  const handleInput = (e) => {
    setTextInput(e.target.value);
  }

  console.log(textInput)

  return (
    <header className="header flex-s-b-c">
      <Input placeholderProps="Поиск..." handleInput={handleInput} />
      <div className="header__inner flex-s-b-c">
        <p>
          Петров В.А.
        </p>
        <span className='avatar'>В.Л.</span>
      </div>
    </header>
  )
}
