import React, { Component } from 'react';
import BookList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  	render() {	
    	return (
    		<div>
    			<h1>React/Redux Goodreads</h1>	
      			<BookList />
      			<BookDetail />
      		</div>
    	);
  	}
}
