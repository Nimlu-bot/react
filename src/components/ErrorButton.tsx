import { PureComponent } from 'react';

type Props = Record<string, never>;

type State = {
  throwError: boolean;
};

class ErrorButton extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { throwError: false };
  }

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('I crashed!');
    }

    return <button onClick={this.handleClick}>Throw error</button>;
  }
}

export default ErrorButton;
