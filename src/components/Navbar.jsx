import booklyLogo from '../assets/bookly-logo-mark.png'

function Navbar({ searchTerm, setSearchTerm }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={booklyLogo} alt="Bookly logo" />
                <span>BOOKLY</span>
            </div>

            <div className="nav-links">

                <a href="#discover">Discover</a>
                <a href="#categories">Categories</a>
                <a href="#my-books">My Books</a>
            </div>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button>Search</button>
            </div>
        </nav>
    )
}

export default Navbar