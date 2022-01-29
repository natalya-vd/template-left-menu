import { Header } from '../Header/Header';
import { Menu } from '../Menu/Menu';
import { FilterBlock } from '../FilterBlock/FilterBlock';
import './Layout.css';

export const Layout = ({children}) => {
  return (
    <div className='layout-wrapper'>
      <Menu />
      <div className='layout-inner'>
        <Header />
        <FilterBlock />
        {children}
      </div>
    </div>
  )
}
