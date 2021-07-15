import { IconContext } from 'react-icons'
import { useLocation } from 'react-router-dom'
import { CgCardSpades } from 'react-icons/cg'
import { IoOptionsSharp } from 'react-icons/io5'
import { BiHomeHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div className='navbar-wrapper'>
      <Link className={`buttonStyles link-wrapper ${ pathname === '/' ? 'link-selected' : null }`} to='/'>
        <IconContext.Provider value={{ className: "icons", color: "black" }}>
          <BiHomeHeart className='navbar-icon' />
        </IconContext.Provider>
        <span>Home</span>
      </Link>
      <Link className={`buttonStyles link-wrapper ${ pathname.startsWith('/categor') ? 'link-selected' : null }`} to='/categories'>
        <IconContext.Provider value={{ className: "icons", color: "black" }}>
          <IoOptionsSharp className='navbar-icon' />
        </IconContext.Provider>
        <span>Categories</span>
      </Link>
      <Link className={`buttonStyles link-wrapper ${ pathname.startsWith('/deck') ? 'link-selected' : null }`} to='/decks'>
        <IconContext.Provider value={{ className: "icons", color: "black" }}>
          <CgCardSpades className='navbar-icon' />
        </IconContext.Provider>
        <span>Decks</span>
      </Link>
    </div>
  )
}

export default Navbar
