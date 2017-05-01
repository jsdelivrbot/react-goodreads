import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started.</div>
		}
		return (
			<div className="bookDetail--container">
				<h3>Details for: </h3>
				<h4>{this.props.book.title}</h4>
				<img src={this.props.book.imageUrl} />
				<div>Author: {this.props.book.author}</div>
				<div>Published: {this.props.book.published}</div>
				<div>Pages: {this.props.book.pages}</div>
				<div>Find out more on <a href={`https://www.goodreads.com/book/show/${this.props.book.goodreadsId}`} target="_blank">Goodreads</a></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);