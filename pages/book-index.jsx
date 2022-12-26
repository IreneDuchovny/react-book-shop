import { bookService } from '../services/book.service.js'
import { BookList } from './book-list.jsx'
import { BookDetails } from './book-details.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
const { useState, useEffect } = React

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(books => setBooks(books))
    }

    function onBookDetails(bookId) {
        bookService.getBookById(bookId).then(book => setSelectedBook(book))
    }

    function onRemoveBook(bookId) {
        bookService.removeBook(bookId).then(() => {
            const updateBooks = books.filter(book => book.id !== bookId)
            setBooks(updateBooks)
            loadBooks()
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return (
        <section>
            {/* <div> filter</div> */}

            {!selectedBook && <div>
                <BookFilter onSetFilter={onSetFilter} />
                <BookList books={books} onBookDetails={onBookDetails}
                    onRemoveBook={onRemoveBook} /></div>}
            {selectedBook && <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />}
        </section>
    )

}
