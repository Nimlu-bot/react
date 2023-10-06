import React, { FormEvent, PureComponent } from 'react';
import Search from '@/components/Search';

import '@components/Header.scss';

type Props = {
  defaultString: string;
  setSearchString: (s: string) => void;
};

type FormObject = {
  search: string;
};

class Header extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries()) as FormObject;
    this.props.setSearchString(formObject.search.trim());
  }

  render() {
    const { defaultString } = this.props;
    return (
      <div className="header">
        <Search onSearch={this.onSearch} defaultValue={defaultString} />
      </div>
    );
  }
}

export default Header;
