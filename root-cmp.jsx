import { HomePage } from './pages/home.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BookIndex } from './pages/book-index.jsx'

const { useState } = React

export function App() {

    const [page, setPage] = useState('home')
    console.log('page is', page)

    return <section className="app">
        <header className="app-header">
            <h1>
                <a href="#" onClick={() => setPage('home')}>
                   Miss Books</a></h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About</a> |
                <a href="#" onClick={() => setPage('book')}>Books</a>
            </nav>
        </header>
        <main>

            {page === 'home' && <HomePage setPage={setPage} />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />}

        </main>
    </section>
}