function Categories({ selectedCategory, setSelectedCategory }) {

    return (
        <section className="categories">
            <div className="section-heading" id="categories">
                <p className="section-label">Explore</p>
                <h2>Browse by category</h2>
            </div>

            <div className="category-list">
                <button className={selectedCategory === 'All' ? 'active' : ''}
                    onClick={() => {
                        setSelectedCategory('All')

                    }}
                >
                    All
                </button>
                <button className={selectedCategory === 'Fiction' ? 'active' : ''}
                    onClick={() => {
                        setSelectedCategory('Fiction')
                    }}
                >
                    Fiction
                </button>
                <button
                    className={selectedCategory === 'Business' ? 'active' : ''}
                    onClick={() => {
                        setSelectedCategory('Business')

                    }}
                >
                    Business
                </button>
                <button
                    className={selectedCategory === 'Technology' ? 'active' : ''}
                    onClick={() => {
                        setSelectedCategory('Technology')

                    }}
                >
                    Technology
                </button>
                <button
                    className={selectedCategory === 'Self Development' ? 'active' : ''}
                    onClick={() => {
                        setSelectedCategory('Self Development')

                    }}
                >
                    Self Development
                </button>
                <button
                    className={selectedCategory === 'Romance' ? 'active' : ''}
                    onClick={() => {
                        setSelectedCategory('Romance')
                    }}
                >
                    Romance
                </button>
            </div>
        </section>
    )
}

export default Categories