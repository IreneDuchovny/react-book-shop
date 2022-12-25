import { bookService } from '../services/book.service.js'
import { BookList } from './book-list.jsx'
import { BookDetails } from './book-details.jsx'
const { useState, useEffect } = React


export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query().then(books => setBooks(books))
    }
    
function onBookDetails(bookId) {
    bookService.getBookById(bookId).then (book => setSelectedBook(book))
}

    return (
        <section>
            {/* <h2>book index gpage</h2> */}
            <div> filter</div>
           {!selectedBook && <BookList books={books} onBookDetails={onBookDetails} />}

            {selectedBook && <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />}
        </section>
    )

}
