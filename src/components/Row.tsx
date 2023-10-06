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
    return (
      <div className="row">
        <span className="row-span">{name}</span>
        <span className="row-span">{height}</span>
        <span className="row-span">{mass}</span>
        <span className="row-span">{birth_year}</span>
        <span className="row-span">{gender}</span>
      </div>
    );
  }
}

export default Row;
