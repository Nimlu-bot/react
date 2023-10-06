import React, { PureComponent } from 'react';
import { getPeople } from '@/utils/api';
import type { peopleResponse } from '@/utils/api';

import '@components/Main.scss';
import Row from '@/components/Row';

type Props = { isLoading: boolean } & Pick<peopleResponse, 'results'>;

const columnNames = ['Name', 'Height', 'Mass', 'Birth', 'Gender'];

class main extends PureComponent<Props> {
  render() {
    const { results, isLoading } = this.props;
    let table;
    if (isLoading) {
      table = <div className="table-message">Loading...</div>;
    } else {
      table = results?.length ? (
        results.map((result, index) => {
          return <Row person={result} key={index} />;
        })
      ) : (
        <div className="table-message">No results</div>
      );
    }

    return (
      <div className="main">
        <div className="table">
          <div className="table-header">
            {columnNames.map((name, index) => (
              <span key={index} className="table-column">
                {name}
              </span>
            ))}
          </div>
          {table}
        </div>
      </div>
    );
  }
}

export default main;
