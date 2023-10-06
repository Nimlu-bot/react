import React, { PureComponent } from 'react';

import '@components/Main.scss';
import SearchContext from '@/SearchContext';

type Props = {};

class main extends PureComponent<Props> {
  static contextType = SearchContext;
  declare context: React.ContextType<typeof SearchContext>;
  render() {
    const { searchParams } = this.context;
    return (
      <div className="main">
        <p>{`Current User: ${searchParams.searchString}`}</p>
      </div>
    );
  }
}

export default main;
