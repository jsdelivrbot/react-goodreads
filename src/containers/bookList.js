import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					className="list-group-item"
					key={book.goodreadsId}
					onClick={() => this.props.selectBook(book)}
					>
					<img src={book.imageUrl} className="img-thumbnail bookList--cover" />
					<span className="bookList--title">{book.title}</span>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="col-sm-4 bookList--container">
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote bookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);