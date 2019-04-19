import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteBook, likeBook, dizBook } from '../../redux/actions';

class List extends Component {
  
  handleClickDelete = (id) => {
    this.props.deleteBook(id);
  }
  handleClickLike = (id) => {
    this.props.likeBook(id);
  }
  handleClickDizlike = (id) => {
    this.props.dizBook(id);
  }
  
  render() {
    const { books } = this.props;
    
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Автор</th>
            <th scope="col">Подробнее</th>
            <th scope="col">Рейтинг</th>
            <th scope="col">Удалить</th>
          </tr>
            {books.map((book, index) => (
              <Fragment key={index}>
                <tr className="mb-2">
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button onClick={() => { this.handleClickLike(book.id) }} className="btn btn-warning mx-2">{book.like} Like</button>
                    <button onClick={() => { this.handleClickDizlike(book.id) }} className="btn btn-warning mx-2">{book.dizlike} Dizlike</button>
                  </td>
                  <td><Link to={`/books/${book.id}`} className="btn btn-primary mx-2">Подробнее</Link></td>
                  <td><button onClick={() => { this.handleClickDelete(book.id) }} className="btn btn-danger mr-2">Удалить</button></td>
                </tr>
              </Fragment>
            ))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.books
  }
}
export default connect(mapStateToProps, { deleteBook, likeBook, dizBook })(List);
