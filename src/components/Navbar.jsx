import { Link } from "react-router-dom"

const Navbar = ({children}) => {

    return (
<div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl ">GamersX</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Contacto</a></li>
      <li><Link to={`/category/Teclado`}>Teclados</Link></li>
      <li><Link to={`/category/Auriculares`}>Auriculares</Link></li>
      <li><Link to={`/category/Mouse`}>Mouse</Link></li>
      <li><Link to={`/category/Monitor`}>Monitores</Link></li>
    </ul>
    {children}
  </div>
</div>
  )
}

export default Navbar