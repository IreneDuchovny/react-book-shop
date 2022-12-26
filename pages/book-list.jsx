import { BookPreview } from './book-preview.jsx'



export function BookList({ books, onBookDetails, onRemoveBook }) {

    return (
        <ul className="book-list">
            {
                books.map(book =>
                    <li key={book.id}>
                    
                            
      
                        <BookPreview book={book} onRemoveBook={onRemoveBook} />
        
                        <div>
                            <button onClick={() => onBookDetails(book.id)}> View more</button>
                            <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>Remove</button>
                        </div>

                    </li>
                )
            }
        </ul>
    )
}
