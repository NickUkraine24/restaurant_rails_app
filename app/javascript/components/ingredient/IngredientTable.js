import React from 'react';
import { withRouter } from "react-router";
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';


class IngredientTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      ingredients: props.data
    };
  }

  handleRowClick(id) {
    this.props.history.push('ingredients/'+id);
    window.location.reload();
  }

  render() {
    return (
      <React.Fragment>
        <Alert color="info">
          <strong>Ingredients</strong> Table:
        </Alert>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ingredients.map((row, index) => (
              <tr key={row.id} onClick={() => this.handleRowClick(row.id)} >
                <th>{index+1}</th>
                <th>{row.name}</th>
                <th>{row.priority}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withRouter(IngredientTable);
