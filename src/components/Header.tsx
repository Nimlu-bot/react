import React, { FormEvent, PureComponent } from 'react';

import '@components/Header.scss';
import Search from '@/components/Search';
import SearchContext from '@/SearchContext';
type Props = {};

type FormObject = {
  search: string;
};

class Header extends PureComponent<Props> {
  static contextType = SearchContext;
  declare context: React.ContextType<typeof SearchContext>;
  constructor(props: Props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries()) as FormObject;
    this.context.setSearchString({ searchString: formObject.search.trim() });
  }

  render() {
    const { searchParams } = this.context;
    return (
      <div className="header">
        <Search onSearch={this.onSearch} defaultValue={searchParams.searchString} />
      </div>
    );
  }
}

export default Header;
