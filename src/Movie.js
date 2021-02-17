import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
	return (
		<div>
			<img src={poster} />
			<h4>{title}</h4>
			<h5>{year}</h5>
			<p>{summary}</p>
		</div>
	);
}

export default Movie;

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
};
