import React, { Component } from 'react';
import {Person, AddPerson} from '../components';
import {chunk} from 'lodash';
import {Col, Row} from 'antd';
import { connect } from 'react-redux';
import { addUser, editUser, deleteUser } from '../actions/actions';

class People extends Component {
    state = {
        addPersonVisible: false,
    }

    deletePerson = (id) => {
        this.props.onDeletePerson(id);
    }

    onEditPerson = (id) => {
        this.setState({editablePersonId: id, addPersonVisible: true})
    }

    editPerson = (person) => {
        if(person.id) {
            this.props.onEditPerson(person)
        } else {
            this.props.onAddPerson(person);
        }

        this.setState({editablePersonId: null, addPersonVisible: false});
    }

    render() {
        // 3 people per row
        const {
            people,
            perRow = 3,
        } = this.props;

        const {addPersonVisible, editablePersonId = null} = this.state;

        let chunks = chunk(people, perRow);
        let span = 24 / perRow;
        return(
            <div style={{background: "#ECECEC", padding: '30px'}}>
            <AddPerson visible={addPersonVisible} personId={editablePersonId} onSubmit={this.editPerson} 
                onCancel={() => this.setState({editablePersonId: null, addPersonVisible: false})} />
            {chunks.map((ch, idx) => (
                <Row type="flex" justify="space-around" align="middle" gutter={16} key={idx}>
                    {ch.map(pers => <Col key={pers.id} span={span}><Person {...pers} onDelete={this.deletePerson} onEdit={this.onEditPerson}/></Col>)}
                </Row>
            ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        people: state.users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (person) => dispatch(addUser(person)),
        onDeletePerson: (id) => dispatch(deleteUser(id)),
        onEditPerson: (person) => dispatch(editUser(person))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(People);