import React, { Component } from 'react';

const columnNames = ['Name', 'Height', 'Mass', 'Birth', 'Gender'];

class TableHeader extends Component {
  render() {
    return (
      <div className="table-header">
        {columnNames.map((name, index) => (
          <span key={index} className="table-column">
            {name}
          </span>
        ))}
      </div>
    );
  }
}

export default TableHeader;
