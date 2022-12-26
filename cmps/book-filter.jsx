const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

export function BookFilter({ onSetFilter }) {

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterBy((prevFilter) => { return { ...prevFilter, [field]: value } })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterBy)
    }
    return <section className="book-filter">

        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Title:</label>
            <input type="text"
                id="title"
                name="title"
                placeholder="By title"
                value={filterBy.title}
                onChange={handleChange}
            />
            <label htmlFor="Price">By price:</label>
            <input type="number"
                id="Price"
                name="price"
                placeholder="byPrice"
                value={filterBy.price}
                onChange={handleChange}
            />

            {/* <button >Search</button> */}

            {/* <input type="text" name="title" placeholder="Search by title" onChange={handleChange} />
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} /> */}
        </form>
    </section>
}