const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { HomePage } from './pages/home.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AppHeader } from './pages/app-header.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { BookEdit } from './pages/book-edit.jsx'
import {AddReview} from './cmps/add-book-review.jsx'

// const { useState } = React

export function App() {

    // const [page, setPage] = useState('home')
    // console.log('page is', page)

    return <Router>
        <section className="app">
            <AppHeader />
            <main>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AboutUs />} path="/about" />
                    <Route element={<BookIndex />} path="/book" />

                    <Route element={<BookDetails />} path="/book/:bookId" >
                        <Route element={<AddReview />} path="/book/:bookId/review" />
                    </Route>
                    <Route element={<BookEdit />} path="/book/edit" />
                        {/* {page === 'home' && <HomePage setPage={setPage} />} */}
                        {/* {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />} */}
                </Routes>
            </main>
        </section>
    </Router>
}