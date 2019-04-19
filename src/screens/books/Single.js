import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook, addBookToFav } from '../../redux/actions';

class Single extends Component {

  handleClickDelete = (id) => {
    this.props.deleteBook(id);
  }

  handleClickAddFav = (id) => {
    this.props.addBookToFav(id);
  }

  render() {
    console.log(this.props);
    const { book } = this.props;
    
    return (
      <div className="more mt-5">
        <div className="title"><span>{book.title}</span></div>
        <div className="content">
          <span><p>{book.author}</p></span>
          <p><span>Цена:</span> {book.price} руб</p>
          <button onClick={() => { this.handleClickAddFav(book.id) }} className="btn btn-success mr-2">В избранное</button>
          <Link to='/' onClick={() => { this.handleClickDelete(book.id) }} className="btn btn-danger ml-2">Удалить</Link> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const currentId   = +props.match.params.id;
  const currentBook = state.books.books.find(book => book.id === currentId);
  
  return {
    book: currentBook
  }
}
export default connect(mapStateToProps, { deleteBook, addBookToFav})(Single);