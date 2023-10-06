import React, { Component } from 'react';
import '@components/Row.scss';

type Props = {
  person: {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
  };
};

class Row extends Component<Props> {
  render() {
    const { name, height, mass, birth_year, gender } = this.props.person;
    const values = [name, height, mass, birth_year, gender];
    return (
      <div className="row">
        {values.map((value, index) => (
          <span key={index} className="row-span">
            {value}
          </span>
        ))}
      </div>
    );
  }
}

export default Row;
