import React from 'react';
import { withRouter } from "react-router";
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';


class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      ingredient: props.data
    };
  }

  handleButtonClick(id) {
    this.props.history.goBack();
    window.location.reload();
  }

  render() {
    return (
      <React.Fragment>
        <Table hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Priority</th>
          </tr>
          </thead>
          <tbody>
            <tr key={this.state.ingredient.id} >
              <th>1</th>
              <th>{this.state.ingredient.name}</th>
              <th>{this.state.ingredient.priority}</th>
            </tr>
          </tbody>
        </Table>
        <Button color="info" onClick={() => this.handleButtonClick(this.state.ingredient.id)} >Back</Button>
      </React.Fragment>
    );
  }
}

export default withRouter(IngredientForm);
