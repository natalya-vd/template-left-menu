import { MenuItem } from './MenuItem';
import './Menu.css';

const menuData = [
  {
    link: '#',
    text: 'NAME COMPANY',
    logo: 'LOGO',
  },
  {
    link: '#',
    text: 'Главная'
  },
  {
    link: '#',
    text: 'Клиенты'
  },
  {
    link: '#',
    text: 'Сотрудники'
  },
  {
    link: '#',
    text: 'Аналитика'
  }
]

export const Menu = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {menuData.map((item, index) => <MenuItem key={index} linkProps={item.link} textProps={item.text} classProps={{link: "nav__link", item: "nav__item"}} logoProps={item.logo} />)}
      </ul>
    </nav>
  )
}
