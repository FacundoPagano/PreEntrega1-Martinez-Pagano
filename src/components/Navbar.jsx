import { Link } from "react-router-dom"

const Navbar = ({children}) => {

    return (
<div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">GamersX</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Inicio</a></li>
      <li tabIndex={0}>
        <a>
          Categorias
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Mouse</a></li>
          <li><a>Teclados</a></li>
          <li><a>Auriculares</a></li>
          <li><a>Monitores</a></li>
        </ul>
      </li>
      <li><a>Contacto</a></li>
    </ul>
    {children}
  </div>
</div>
  )
}

export default Navbar