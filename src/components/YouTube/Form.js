import React from 'react';
import { Link } from 'react-router-dom';


function Form(props) {
  console.log(props)
  const { searchValue, handleChange, handleClick } = props;
  console.log(searchValue)
  return (
    <div className="form-inline py-5">
      <input
        type="text"
        placeholder="Поиск"
        name="searchValue"
        className="form-control mr-2"
        value={searchValue}
        onChange={handleChange}
      />
      <Link to="/youtube/videolist" className="btn btn-dark" onClick={handleClick}>
        Поиск
      </Link>
    </div>
  )
}

export default Form;