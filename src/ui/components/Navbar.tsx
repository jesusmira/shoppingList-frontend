// import { useEffect } from 'react';
import { ButtonsComponent } from './ButtonsComponent';
import { CartButton } from './CartButton';
import { Link} from 'react-router-dom';
import { useAppDispatch } from '../../hooks/dbstore';
import { changeDisplay } from '../../store';

export const Navbar = () => {
  const disspatch = useAppDispatch();
  const myHandleClick = () => {
    disspatch( changeDisplay() );
  }
  return (
    <nav className=" fixed bg-white w-1/5 md:w-[93px]">
      <div  className="relative flex flex-col items-center justify-between h-screen py-8 ">
        <Link to="/">
          <img src="./logo.svg" alt="logo" className='w-12' />
        </Link>
        <div className="absolute rounded  bg-orange-company w-5 h-12 inset-[37%] md:inset-[40%]  xl:inset-[38.7%] transform -translate-x-10 md:-translate-x-12 xl:-translate-x-12 -translate-y-1/2  "></div>
        <ButtonsComponent />
        <CartButton  handleClick={myHandleClick}/>
      </div>
          
      </nav>
  )
}
