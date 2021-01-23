import React from 'react'
import Book from './Book'
import books from '../data/BookData'

const BookList = (props) => {
    const bookCard = books.map(item => (
      <div>
       <Book key={item.id} book={item}/>
      </div>
    ))
    return(
      <div className="book-list">
       {bookCard}
      </div>
    )

}

export default BookList

