import React, { PureComponent } from 'react';
import SearchContext from '@/SearchContext';
import { getPeople } from '@/api';
import type { peopleResponse } from '@/api';

import '@components/Main.scss';
import Row from '@/components/Row';

type Props = {};
type State = {} & Pick<peopleResponse, 'results'>;
const columnNames = ['Name', 'Height', 'Mass', 'Birth', 'Gender'];

class main extends PureComponent<Props, State> {
  static contextType = SearchContext;
  declare context: React.ContextType<typeof SearchContext>;
  constructor(props: Props) {
    super(props);
    this.state = {
      results: [{ name: '', height: '', mass: '', birth_year: '', gender: '' }],
    };
  }

  componentDidMount(): void {
    getPeople(this.context.searchParams.searchString).then((people) => {
      this.setState({ results: people.results });
    });
  }

  render() {
    const { results } = this.state;
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
          {results?.length &&
            results.map((result, index) => {
              return <Row person={result} key={index} />;
            })}
        </div>
      </div>
    );
  }
}

export default main;
