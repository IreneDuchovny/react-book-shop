import { BookPreview } from './book-preview.jsx'



export function BookList({ books, onBookDetails }) {

    return (
        <ul className="book-list">
            {/* <h2>book list</h2> */}
            {
                books.map(book => <li key={book.id}>
                    <BookPreview book={book} />
                    <div>
                    <button onClick={() => onBookDetails(book.id)}> View more</button>
                </div>
                </li>
                )
            }
        </ul>
    )
}
