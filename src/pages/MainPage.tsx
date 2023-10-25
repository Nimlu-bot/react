import { getPeople, peopleResponse } from '@/utils/api';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import { getLocalData, setLocalData } from '@/utils/local';
import React, { Component } from 'react';

type Props = Record<string, never>;

type State = {
  searchString: string;
  isLoading: boolean;
} & Pick<peopleResponse, 'results'>;

const DATA_KEY = 'searchString';

class MainPage extends Component<Props, State> {
  state = {
    searchString: '',
    results: [{ name: '', height: '', mass: '', birth_year: '', gender: '' }],
    isLoading: false,
  };

  constructor(props: Props) {
    super(props);
    this.setSearchString = this.setSearchString.bind(this);
  }

  componentDidMount(): void {
    const searchString = getLocalData(DATA_KEY);
    this.setState({ searchString });
    this.callApi(searchString);
  }

  setSearchString(searchString: string) {
    setLocalData(DATA_KEY, searchString);
    this.setState({ searchString });
    this.callApi(searchString);
  }

  callApi(searchString = '') {
    this.setState({ isLoading: true });
    getPeople(searchString).then((people) => {
      this.setState({ results: people.results, isLoading: false });
    });
  }

  render() {
    const { searchString, results, isLoading } = this.state;
    return (
      <>
        <Header defaultString={searchString} setSearchString={this.setSearchString} />
        <Main results={results} isLoading={isLoading} />
        <Footer />
      </>
    );
  }
}

export default MainPage;
