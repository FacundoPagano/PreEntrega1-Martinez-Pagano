
const Navbar = ({children}) => {

    return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-l" href="">Catalogo</a>
    <a className="btn btn-ghost normal-case text-l" href="">Tienda</a>
    <a className="btn btn-ghost normal-case text-l" href="">Contactos</a>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="">Nickers</a>
  </div>
  <div>
   {children}
  </div>
</div>
  )
}

export default Navbar