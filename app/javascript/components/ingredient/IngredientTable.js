import React from 'react';
// import { Table } from 'reactstrap';


class IngredientTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: props.data
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {this.state.ingredients.map((row, index) => (
            <tr key={row.id}>
              <th>{index+1}</th>
              <th>{row.name}</th>
              <th>{row.priority}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default IngredientTable;
