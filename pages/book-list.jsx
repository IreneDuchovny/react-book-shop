const { Link } = ReactRouterDOM

import { BookPreview } from './book-preview.jsx'



export function BookList({ books, onBookDetails, onRemoveBook }) {

    return (
        <ul className="book-list">
            {
                books.map(book =>
                    <li key={book.id}>
                    
                            
      
                        <BookPreview book={book} onRemoveBook={onRemoveBook} />
        
                        <div>
                            <button><Link to={`/book/${book.id}`}> View more</Link></button>
                            <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>Remove</button>
                        </div>

                    </li>
                )
            }
        </ul>
    )
}
