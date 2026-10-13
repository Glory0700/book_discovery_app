import bookHero from '../assets/bookly-hero-book.png'

function Hero({ searchTerm, setSearchTerm }) {

    return (
        <section className="hero">
            <div className="hero-content" id="discover">
                <p className="hero-label">YOUR NEXT GREAT READ</p>

                <h1>
                    Discover books
                    <br />
                    worth reading.
                </h1>

                <p className="hero-description">
                    Explore new stories, discover inspiring authors, and find your next favorite book.
                </p>

                <div className="search-box">
                    <input type="text"
                        placeholder="Search for a book or author..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button>Search</button>
                </div>
            </div>

            <div className="hero-image">
                <img src={bookHero} alt="Open book" />
            </div>
        </section>
    )
}

export default Hero