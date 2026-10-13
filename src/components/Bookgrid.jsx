function Bookgrid({ books, loading }) {
    return (
        <section className="books">
            <div className="book-grid">
                {loading ? (
                    <p>Loading books...</p>
                ) : (
                    books.map((book) => (
                        <article className="book-card" key={book.key}>
                            <div className="book-cover">
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                                    alt={book.title}
                                />
                            </div>

                            <div className="book-info">
                                <h3>{book.title}</h3>
                                <p>{book.author_name?.[0]}</p>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    )
}

export default Bookgrid