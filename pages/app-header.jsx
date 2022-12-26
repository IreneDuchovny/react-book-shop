
const { Link, NavLink } = ReactRouterDOM
export function AppHeader({ setPage }) {

    return <header className="app-header">
        <h1>
            <Link to="/">Miss Book</Link>
        </h1>
        <nav className="app-nav">
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/about">About</NavLink> |
            <NavLink to="/book">Books</NavLink>
        </nav>
    </header>

}