import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div>ONUR ARDIÇ & EMRE ENES YENEN</div>

      <nav>
        <ul>
          <li>
            <Link to="/home">Anasayfa</Link>
          </li>
          <li>
            <Link to="/about">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/contact">İletişim</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
