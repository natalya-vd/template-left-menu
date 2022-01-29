import { FilterForm } from './FilterForm';
import './FilterBlock.css';
import IconSettings from '../icons/settings.svg';
import { useState } from 'react';


export const FilterBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`filter-block ${isOpen ? 'open' : ''}`}>
      <div className='filter-block__inner'>
        <p>
          filter block
        </p>
        <button className='button' type="button" onClick={handleOpen}>
          <img src={IconSettings} alt="settings" />
        </button>
      </div>
      <FilterForm isOpenProps={isOpen}/>
    </div>
  )
}
