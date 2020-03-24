import React from 'react';
import Parser from 'html-react-parser';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor', this);

    this.state = {
      name: props.data.name,
      priority: props.data.priority,
      old_priority: props.data.priority,
      names: this.getNamesList(this.props.data),
      title: props.data == {} ? 'Add <strong>new</strong> ingredient' :'<strong>Edit</strong> ingredient',
      validName: false,
      validPriority: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount', this);
    if(this.props.history.action == 'PUSH') {
      this.setState({
        name: this.props.history.location.data.name,
        priority: this.props.history.location.data.priority,
        old_priority: this.props.history.location.data.priority,
        names: this.getNamesList(this.props.data),
        title: '<strong>Edit</strong> ingredient',
        validName: false,
        validPriority: false,
      });
    }
  }

  getNamesList(ingredientsArray) {
    const names = [];
    for (let i in ingredientsArray) {
      names.push(ingredientsArray[i]['name']);
    }
    return (names);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
      validName: this.state.names.includes(event.target.value) ? false : true,
    });
  }

  handleChangePriority(event) {
    this.setState({
      priority: Number(event.target.value),
      validPriority: Number(event.target.value) !== this.state.old_priority ? true : false,
    });
  }

  setEnabledButton() {
    return (
      (this.state.name !== '' && (this.state.validName === true || this.state.validPriority === true)) ? false : true
    )
  }

  handleSubmit(event) {
    console.log(event);
  }

  render() {
    return (
      <React.Fragment>
        <Alert color="info">
          {Parser(this.state.title)}
        </Alert>

        <Form>
          <FormGroup>
            <Label for="name">Ingredient name</Label>
            <Input type="text"
                   name="name"
                   id="name"
                   placeholder="name of ingredient"
                   value={this.state.name}
                   onChange={this.handleChangeName.bind(this)} />
            <FormText>Set the name of current ingredient.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="priority">Ingredient priority</Label>
            <Input type="select"
                   name="priority"
                   id="priority"
                   value={this.state.priority}
                   onChange={this.handleChangePriority.bind(this)} >
              <option defaultValue>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <FormText>Set the priority of ingredient.</FormText>
          </FormGroup>

          <NavLink to={'/admin/ingredients'}>
            <Button color="info" size="lg" style={{width: '18%', marginRight: '3%'}}> Back </Button>
          </NavLink>
          <Button color="info" size="lg"
                  style={{width: '18%'}}
                  disabled={this.setEnabledButton()}
                  onClick={this.handleSubmit}> Save </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default withRouter(IngredientForm);
