import React from "react";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import IngredientForm from "./ingredient/IngredientForm";
import IngredientTable from "./ingredient/IngredientTable";


class AdminRoutes extends React.Component {
  render () {
    return (
      <div style={{width: '90%', left: '5%', top: '5%', transform: 'translate(5%, 5%)'}}>
        <Switch>
          <Route path="/admin/ingredients/new" render={() => <IngredientForm />} />
          <Route path="/admin/ingredients/:id" render={(props) => <IngredientForm data={this.props.data} />} />
          <Route path="/admin/ingredients" render={(props) => <IngredientTable data={this.props.data} />} />
          <Route path="/admin" component={HelloAdmin} />
          <Redirect path='*' to='/admin' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AdminRoutes);

class HelloAdmin extends React.Component {
  render () {
    return (
      <div>Hello Admin!</div>
    )
  }
}
