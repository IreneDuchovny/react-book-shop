const { useEffect, useState } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM
import { bookService } from '../services/book.service.js'

// 

export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    console.log('params', params)

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.getBookById(params.bookId).then
            (book => setBook(book))
            .catch((err) => {
                console.log('Had issues in car details', err)
                navigate('/book')
            })
    }


    function pageCount(book) {
        if (book.pageCount > 500) {
            return <h4>Serious reading</h4>
        } else if (book.pageCount > 200) {
            return <h4>Decent reading</h4>
        } else if (book.pageCount < 100) {
            return <h4>Light reading</h4>
        }
    }

    function publishedDate(book) {
        if (book.publishedDate < 2012) return 'Vintage'
        else if (book.publishedDate >= 2021) return 'New!'
    }

    function priceColor(book) {
        if (book.listPrice.amount > 150) return 'red-price'
        else if (book.listPrice.amount < 20) return 'green-price'
    }

    function onBack() {
        navigate('/book')
    }


    if (!book) return <div>Loading...</div>
    return (
        <div className="book-det-container">
            <article className="book-details">
                {book.listPrice.isOnSale ? <h2 className="on-sale">On Sale!</h2> : ''}
                <h3>{book.title} - <span className="published"> {publishedDate(book)} </span></h3>
                {pageCount(book)}
                <h4>Price: <span className={priceColor(book)}>{book.listPrice.amount}</span>
                    {book.listPrice.currencyCode}</h4>
                <h5> Written by: {book.authors}</h5>
                <h5> {book.description}</h5>
                {/* <img src={book.thumbnail} alt="" /> */}
                <div className="details-btns">
                    <button><Link to="/book/:bookId/review"> add review</Link></button>
                    <div className="nested-route">
                        <Outlet book={book} />
                    </div>
                    {/* <AddReview book={book} /> */}

                    <button className="back-btn" onClick={() => onBack()}>Back</button></div>
            </article>
            <img src={book.thumbnail} alt="" />

        </div>
    )
}