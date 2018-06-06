import React, { Component } from 'react';
import {Person, AddPerson} from '../components';
import {chunk} from 'lodash';
import {Col, Row} from 'antd';
class People extends Component {
    state = {
        addPersonVisible: false,
        people: []
    }

    addPerson = ({name, id, location, byline}) => {
        // This is important: we need to copy the array first!
        const people = [...this.state.people];  
        people.push({name, location, byline, id});
        this.setState({people});
    }

    deletePerson = (id) => {
        const people = [...this.state.people];
        people.splice(people.findIndex(e => e.id === id), 1);
        this.setState({people});
    }

    onEditPerson = (id) => {
        const person = {...this.state.people.find(e=>e.id === id)};
        this.setState({editablePerson: person, addPersonVisible: true})
    }

    editPerson = (person) => {
        const people = [...this.state.people];
        const pidx = people.findIndex(e => e.id === person.id);
        people[pidx] = person;
        this.setState({people, addPersonVisible: false});
    }

    render() {
        // 3 people per row
        const {
            perRow = 3
        } = this.props;

        const {editablePerson, addPersonVisible} = this.state;

        let chunks = chunk(this.state.people, perRow);
        let span = 24 / perRow;
        return(
            <div style={{background: "#ECECEC", padding: '30px'}}>
            <AddPerson visible={addPersonVisible} person={editablePerson} onSubmit={this.editPerson} onCancel={() => this.setState({addPersonVisible: false})}/>
            {chunks.map((ch, idx) => (
                <Row type="flex" justify="space-around" align="middle" gutter={16} key={idx}>
                    {ch.map(pers => <Col key={pers.id} span={span}><Person {...pers} onDelete={this.deletePerson} onEdit={this.onEditPerson}/></Col>)}
                </Row>
            ))}
            </div>
        );
    }
}

export default People;