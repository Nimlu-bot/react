import React, { Component, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '@components/Search.scss';

type Props = {
  onSearch: (e: FormEvent<HTMLFormElement>) => void;
  defaultValue: string;
};

class Search extends Component<Props> {
  render() {
    const { onSearch, defaultValue } = this.props;
    return (
      <form className="search" onSubmit={onSearch}>
        <input type="text" name="search" className="search-input" defaultValue={defaultValue} />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </button>
      </form>
    );
  }
}

export default Search;
