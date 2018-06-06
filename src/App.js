import React, { Component } from 'react';
import { Layout, Menu, Modal } from 'antd';
import './App.css';
import People from './containers/People';
import {AddPerson} from './components';

const { Header, Content, Footer } = Layout;


class App extends Component {
  state = {
    addPersonVisible: false
  };

  addPerson = (person) => {
    this.people.addPerson(person);
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
            <People ref={ppl => (this.people = ppl)}/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
