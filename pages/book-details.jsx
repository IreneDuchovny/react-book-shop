


export function BookDetails({ book, onBack }) {
    return (
        <article className="book-details">
            <h3>{book.title}</h3>
            <h4>{book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <h5>{book.authors}</h5>
            <h5> {book.description}</h5>
            <img src={book.thumbnail} alt="" />
            <button onClick={() => onBack()}>Back</button>
        </article>
    )
}