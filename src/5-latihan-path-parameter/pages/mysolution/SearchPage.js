import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../utils/data';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') ? searchParams.get('title') : ""
  const navigate = useNavigate();
  return <SearchPage 
            title={title} 
            navigate={navigate}
          />
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundedMovies: searchMovies(props.title)
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.props.navigate(`/search?title=${keyword}`)
    this.setState(() => {
      return {
        foundedMovies: searchMovies(keyword)
      }
    })
  }

  render() {
    return (
      <section>
        <h2>Search Movie</h2>
        <SearchBar search={this.onSearch} defaultKeyword={this.props.title} />
        <MovieList movies={this.state.foundedMovies} />
      </section>
    );
  }
}

export default SearchPageWrapper;
