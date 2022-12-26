

export function BookPreview({ book , onRemoveBook}) {
    return (
        <article className="book-preview">
            <h3>{book.title}</h3>
            <h4>{book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <img src={book.thumbnail} alt="" />
            {/* <img src="../assets/img/book-cover-placeholder.png" alt="" /> */}
            <h5>{book.authors}</h5>
            
            {/* <p>{book.description}</p> */}
        </article>
    )
}