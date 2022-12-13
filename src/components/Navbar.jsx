
const Navbar = ({children}) => {

    return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-l">Catalogo</a>
    <a className="btn btn-ghost normal-case text-l">Tienda</a>
    <a className="btn btn-ghost normal-case text-l">Contactos</a>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Nickers</a>
  </div>
  <div>
   {children}
  </div>
</div>
  )
}

export default Navbar