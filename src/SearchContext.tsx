import React, { Component, FormEvent, PropsWithChildren } from 'react';
import type { SearchContextType } from '@/types';
import { getLocalData, setLocalData } from '@/utils';

const SearchContext = React.createContext({} as SearchContextType);

class SearchProvider extends Component<PropsWithChildren<{}>> {
  constructor(props: {}) {
    super(props);
    this.setSearchString = this.setSearchString.bind(this);
  }

  componentDidMount() {
    const defaultValue = getLocalData('searchString');
    this.setState({ searchString: defaultValue });
  }

  state = {
    searchString: '',
  };

  setSearchString(searchParams: { searchString: string }) {
    setLocalData('searchString', searchParams.searchString);
    this.setState({ searchString: searchParams.searchString });
  }

  render() {
    const { children } = this.props;
    const { searchString } = this.state;
    const contextValue = {
      searchParams: { searchString: searchString },
      setSearchString: this.setSearchString,
    };

    return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
  }
}

export { SearchProvider };
export const SearchConsumer = SearchContext.Consumer;

export default SearchContext;
