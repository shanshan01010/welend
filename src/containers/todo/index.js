import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, List, Checkbox, Input, Logo } from '../../components';
import Header from './header';
import * as actionCreators from '../../actions/todo';

import './index.css';

@connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => (bindActionCreators(actionCreators, dispatch))
)
class Todo extends Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      value: "",
      checkId: "",
      checkCom: false,
      src: "./img/ten.png",
      style:{
        opacity: 0,
      },
      logoStyle:{

      },
      liStyle:{
        
      }
    }
  }
 
  onAddTodoCilck(){
    this.props.addTodo( this.state.value );
    this.setState(
      { value:"" }
    )
  }
  
  onInputTextChange( event ) {
    this.setState({
      value:event.target.value,
    })
    
  }

  onCheckboxClick(event) {
    let id = this.props.todos[event].id;
    
    let completed = this.props.todos[event].completed;
    console.log(id,completed);
    this.props.toggleCompleted(id,completed);
  }

  onListItemFocus() {
    this.setState({
      style:{
        opacity: 1,
      },
      logoStyle:{
        border: "2px solid #ccc",
        width: "18px",
        height: "18px",
        background: "#fff",
        marginLeft: "20px",
        marginTop: "16px"
      }
    })
  }

  onListItemBlur(){
    this.setState({
      style:{
        opacity: 0,
      },
      logoStyle:{
        border: 0,
      }
    })
  }
  

  render() {
    const { todos } = this.props;
    return (
      <div>
        <Header/>
        <List>
          
          {todos.map((todo, index) => (
            
            <List.Item liStyle={this.state.liStyle}>
            <Checkbox onClick={this.onCheckboxClick.bind(this,index)}></Checkbox>
            {todo.text}
            </List.Item>
          ))}
          
        </List>
        <List.Item onFocus={this.onListItemFocus.bind(this)} onBlur={this.onListItemBlur.bind(this)}>
          <Logo logoStyle={this.state.logoStyle}></Logo>
          <Input onChange={this.onInputTextChange.bind(this)} value={this.state.value}></Input>
          <Button onClick={this.onAddTodoCilck.bind(this)} style={this.state.style}>添加</Button>
        </List.Item>
      </div>
    );
  }
};

export default Todo;
