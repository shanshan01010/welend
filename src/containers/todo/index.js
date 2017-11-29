import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, List, Checkbox, Input, Logo, TextContainer } from '../../components';
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
      style:{
        opacity: 0,
      }
    }
  }
 
  onAddTodoCilck(){
    if(this.state.value === ''){

    }else{
      this.props.addTodo( this.state.value );
      this.setState(
        { value:"" }
      )
    }   
  }
  
  onInputTextChange( event ) {
    this.setState({
      value:event.target.value,
    })  
  }

  onCheckboxClick(index) {
    let id = this.props.todos[index].id;
    
    let completed = this.props.todos[index].completed;
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
        left: "37px",
        top: "17px"
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
            
            <List.Item liStyle={{ background: todo.completed ? "#F4F6FF" : "#fff"}} checkCom={todo.completed}>
            <Checkbox onClick={this.onCheckboxClick.bind(this,index)}></Checkbox>
            <TextContainer checkCom={todo.completed}>{todo.text}</TextContainer>
            </List.Item>

          ))}
          
        </List>

        <List.Item liStyle={{ height: "50px"}} onFocus={this.onListItemFocus.bind(this)} onBlur={this.onListItemBlur.bind(this)}>
          <Logo logoStyle={this.state.logoStyle} onClick={this.onListItemFocus.bind(this)}></Logo>
          <Input onChange={this.onInputTextChange.bind(this)} value={this.state.value}></Input>
          <Button onClick={this.onAddTodoCilck.bind(this)} style={this.state.style}>添加</Button>
        </List.Item>
        
      </div>
    );
  }
};

export default Todo;
