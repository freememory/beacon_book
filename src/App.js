import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import People from './containers/People';
import {AddPerson} from './components';
import { connect } from 'react-redux';
import { addUser } from './actions/actions';

const { Header, Content } = Layout;

class App extends Component {
  state = {
    addPersonVisible: false
  };

  addPerson = (person) => {
    this.props.onAddPerson(person);
    this.setState({addPersonVisible: false});
  }

  onMenuClick = ({key, ...rest}) => {
    if(key === 'add') 
      this.setState({addPersonVisible: true});
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" style={{lineHeight: '64px'}} onClick={this.onMenuClick}>
              <Menu.Item key="add">Add User</Menu.Item>
              <Menu.Item key="mgrs">View Managers</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <AddPerson visible={this.state.addPersonVisible} onSubmit={this.addPerson} onCancel={() => this.setState({addPersonVisible: false})} />
            <People />
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: person => dispatch(addUser(person))
  }
}

export default connect(null, mapDispatchToProps)(App);
