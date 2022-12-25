// import { UserPreview } from '../cmps/user-preview.jsx'

export function HomePage({setPage}) {
    return (
        <section>
            {/* <h2>HomePage</h2> */}
            <img  className="home-img" src="assets/img/book-shop.jpg" alt="" onClick={() => setPage('book')}/>
            {/* <UserPreview /> */}
        </section>
    )
}
