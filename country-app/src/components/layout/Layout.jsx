import './Layout.scss'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

        <header>
            <h1>World Countries App</h1>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <p>© - copyright 2025</p>
        </footer>
    </>
  )
}

export default Layout
