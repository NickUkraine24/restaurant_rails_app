import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Alert, Table, Button } from 'reactstrap';


class IngredientTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: props.data
    };
  }

  handleRowClick(row) {
    this.props.history.push({
      pathname: `ingredients/${row.id}`,
      data: row
    });
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
              <tr key={row.id} onClick={() => this.handleRowClick(row)} >
                <th>{index+1}</th>
                <th>{row.name}</th>
                <th>{row.priority}</th>
              </tr>
            ))}
          </tbody>
        </Table>

        <NavLink to={'/admin/ingredients/new'}>
          <Button color="info" size="lg" style={{width: '18%'}}> New ingredient </Button>
        </NavLink>
      </React.Fragment>
    );
  }
}

export default withRouter(IngredientTable);
