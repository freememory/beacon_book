import React, { Component } from 'react';
import Person from './Person';
import {chunk} from 'lodash';
import {Col, Row} from 'antd';
class People extends Component {
    state = {
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

    render() {
        // 3 people per row
        const {
            perRow = 3
        } = this.props;

        let chunks = chunk(this.state.people, perRow);
        let span = 24 / perRow;
        return(
            <div style={{background: "#ECECEC", padding: '30px'}}>
            {chunks.map((ch, idx) => (
                <Row type="flex" justify="space-around" align="middle" gutter={16} key={idx}>
                    {ch.map(pers => <Col span={span}><Person key={pers.id} {...pers} onDelete={this.deletePerson}/></Col>)}
                </Row>
            ))}
            </div>
        );
    }
}

export default People;