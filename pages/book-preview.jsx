

export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h3>{book.title}</h3>
            <h4>{book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <h5>{book.authors}</h5>
            {/* <img src={book.thumbnail} alt="" /> */}
            {/* <p>{book.description}</p> */}
        </article>
    )
}