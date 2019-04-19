import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createBook } from '../../redux/actions';

const authors = [
  {
    authorName: "Автор",
    authorValue: "Автор"
  },
  { 
    authorName:"Толстой",
    authorValue:"Толстой"
  },
  { 
    authorName: "Достоевский",
    authorValue: "Достоевский"
  },
  { 
    authorName: "Пушкин",
    authorValue: "Пушкин"
  },
  { 
    authorName: "Гоголь",
    authorValue: "Гоголь"
  },
  { 
    authorName: "Чехов",
    authorValue: "Чехов"
  },
  { 
    authorName: "Булгаков",
    authorValue: "Булгаков"
  }];

class Form extends Component {
  state = {
    title: '',
    price: '',
    author:''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, price, author} = this.state;
    const newBook = { title, price, author};
    this.props.createBook(newBook);

    this.setState({ title: '', price: '', author: '' });
  }
  
  render() {
    console.log(this.state);
    
    return (
      <form className="form-inline my-3" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Название" 
          name="title" 
          value={this.state.title}
          className="form-control mr-2" 
          onChange={this.handleChange} 
        />
        <input
          type="number"
          placeholder="Цена"
          name="price"
          value={this.state.price}
          className="form-control mr-2"
          onChange={this.handleChange}
        />

        <select onChange={this.handleChange} name="author" className="form-control" value={this.state.author}>
          {authors.map((author, index) => (
            <option key={index} value={author.authorValue}>{author.authorName}</option>
          ))}
        </select>
        <button className="btn btn-success mx-2">Добавить новую книгу</button>
      </form>
    )
  }
}


export default connect(null, { createBook })(Form);