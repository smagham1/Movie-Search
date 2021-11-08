import React, { useState } from "https://cdn.skypack.dev/react";

import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async e => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=7412fc78182d56ce3c499f01f947c89c&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("form", { className: "form", onSubmit: searchMovies }, /*#__PURE__*/
    React.createElement("label", { className: "label", htmlFor: "query" }, "Search Films..."), /*#__PURE__*/


    React.createElement("input", {
      className: "input",
      type: "text",
      name: "query",
      placeholder: "i.e. The Lord of The Rings",
      value: query,
      onChange: e => setQuery(e.target.value) }), /*#__PURE__*/

    React.createElement("button", { className: "button", type: "submit" }, "Search")), /*#__PURE__*/



    React.createElement("div", { className: "card-list" },
    movies.
    filter(movie => movie.poster_path).
    map((movie) => /*#__PURE__*/
    React.createElement("div", { className: "card", key: movie.id }, /*#__PURE__*/
    React.createElement("img", {
      className: "card--image",
      src: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`,
      alt: movie.title + " poster" }), /*#__PURE__*/

    React.createElement("div", { className: "card--content" }, /*#__PURE__*/
    React.createElement("h3", { className: "card--title" }, movie.title), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("small", null, /*#__PURE__*/
    React.createElement("b", null, "RELEASE DATE: "),
    movie.release_date)), /*#__PURE__*/


    React.createElement("p", null, /*#__PURE__*/
    React.createElement("small", null, /*#__PURE__*/
    React.createElement("b", null, "RATING: "),
    movie.vote_average)), /*#__PURE__*/


    React.createElement("p", { className: "card--desc" }, movie.overview)))))));






}

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", { className: "title" }, "The Movie Search App. React"), /*#__PURE__*/
    React.createElement(SearchMovies, null)));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));