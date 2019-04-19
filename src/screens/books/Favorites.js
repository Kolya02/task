import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { deleteFavBook } from '../../redux/actions';

class Favorites extends Component {
  handleClickDeleteFav = (id) => {
    this.props.deleteFavBook(id);
  }
  
  render() {
    console.log(this.props);
    const { currentBooksFav} = this.props;
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Автор</th>
            <th scope="col">Цена</th>
            <th scope="col">Удалить</th>
          </tr>
          {currentBooksFav.map((bookFav, index) => (
            <Fragment key={index}>
              <tr className="mb-2">
                <td>{bookFav.title}</td>
                <td>{bookFav.author}</td>
                <td>{bookFav.price}</td>
                <td><button onClick={() => {
                  this.handleClickDeleteFav(bookFav.id)
                }} className="btn btn-danger mr-2">Удалить из Избранного</button></td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state, props) => {
  const books = state.books.books;
  const favIds = state.books.favIds;
  const currentBooksFav = books.filter(book => favIds.includes(book.id));
  
  return {
    currentBooksFav
  }
}
export default connect(mapStateToProps, { deleteFavBook })(Favorites);