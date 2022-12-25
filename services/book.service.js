import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOKS_KEY = 'books'
_createBooks()

export const bookService = {
    query,
    getBookById,
    removeBook,
    saveBook
}

function query() {
    return storageService.query(BOOKS_KEY) || Promise.resolve([])
}

function _createBooks() {
    utilService.saveToStorage(BOOKS_KEY, [])
    var books = [
        {
            id: utilService.makeId(),
            title: 'Harry Potter',
            description:utilService.makeLorem(),
            listPrice: {
                amount: 109,
                currencyCode: 'EUR',
                isOnSale: false
            }
        },
        {
            id: utilService.makeId(),
            title: 'Harry Potter 2',
            description:utilService.makeLorem(),
            listPrice: {
                amount: 109,
                currencyCode: 'EUR',
                isOnSale: false
            }
        },
        {
            id: utilService.makeId(),
            title: 'Harry Potter 3',
            description:utilService.makeLorem(),
            listPrice: {
                amount: 89,
                currencyCode: 'EUR',
                isOnSale: true

            }
        }
    ]
    storageService.post(BOOKS_KEY, books[0]).then(() => {
        console.log('Book added')
        storageService.post(BOOKS_KEY, books[1]).then(() => {
            console.log('Book added')
            storageService.post(BOOKS_KEY, books[2]).then(() => {
                console.log('Book added')
            })
        })
    })
}
function getBookById(bookId) {
    return storageService.get(BOOKS_KEY, bookId)
}

function removeBook(bookId) {
    return storageService.remove(BOOKS_KEY, bookId)
}



function saveBook(book) {
    if (book.id) return storageService.put(BOOKS_KEY, book)
    else return storageService.post(BOOKS_KEY, book)
}