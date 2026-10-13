import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Bookgrid from './components/Bookgrid'
import { useState, useEffect } from 'react'





function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [apiBooks, setApiBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [categoryQuery, setCategoryQuery] = useState('books')

  useEffect(() => {
    const query = selectedCategory === 'All'
      ? 'books'
      : selectedCategory.toLowerCase()

    setLoading(true)

    fetch(`https://openlibrary.org/search.json?q=subject:${query}`)
      .then((response) => response.json())
      .then((data) => {
        setApiBooks(data.docs)
        setLoading(false)
      })
  }, [selectedCategory])

  const handleSearch = () => {
    console.log(searchTerm)
  }

  const filteredBooks = apiBooks.filter((book) =>

    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author_name?.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase()))
  )


  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main>
        <Hero
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Bookgrid books={filteredBooks} loading={loading} />
      </main>
    </div >
  )
}

export default App