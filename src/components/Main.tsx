import React, { PureComponent } from 'react';
import type { peopleResponse } from '@/utils/api';

import '@components/Main.scss';
import Row from '@/components/Row';
import TableHeader from '@/components/TableHeader';

type Props = { isLoading: boolean } & Pick<peopleResponse, 'results'>;

class main extends PureComponent<Props> {
  render() {
    const { results, isLoading } = this.props;
    let table;
    if (isLoading) {
      table = <div className="table-message">Loading...</div>;
    } else if (results?.length) {
      table = results.map((result, idx) => <Row person={result} key={idx} />);
    } else {
      table = <div className="table-message">No results</div>;
    }

    return (
      <div className="main">
        <div className="table">
          <TableHeader />
          {table}
        </div>
      </div>
    );
  }
}

export default main;
