import React, { Component } from 'react';
import {Input, Select, Modal} from 'antd';
import { connect } from 'react-redux';
const Option = Select.Option;
const { TextArea } = Input;

const defaultState = {
    name: '',
    byline: '',
    location: undefined
}

class AddPerson extends Component {

    state = {
        isVisible: false,
        ...defaultState  
    };

    static getDerivedStateFromProps(nextProps, curState) {
        if(nextProps.visible !== curState.isVisible) {
            let newState = {                
                isVisible: nextProps.visible,
                ...defaultState,
                ...nextProps.person
            };

            return newState;
        }

        return null;
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }

    onChangeLocation = (location) => {
        this.setState({location});
    }

    onChangeByline = (e) => {
        this.setState({byline: e.target.value});
    }

    onOk = () => {
        this.props.onSubmit(this.state);
    }    

    render() {
        const { onCancel, visible } = this.props;
        const {name, location, byline, id} = this.state;
        return (
            <Modal visible={visible} title="Add Person" onOk={this.onOk} onCancel={onCancel}>
                <Input placeholder="Enter full name" value={name} onChange={this.onChangeName} />
                <Select placeholder="Location" value ={location} style={{width: 120}} onChange={this.onChangeLocation}>
                    <Option value="nyc">New York</Option>
                    <Option value="ldn">London</Option>
                    <Option value="bln">Berlin</Option>
                    <Option value="waw">Warsaw</Option>
                    <Option value="tlv">Tel Aviv</Option>
                    <Option value="tko">Tokyo</Option>
                </Select>
                <TextArea rows={4} value={byline} onChange={this.onChangeByline} />
                <hr/>
                <h5>Employee id: {id}</h5>
            </Modal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ownProps.personId ? { person: state.users.find(u => u.id === ownProps.personId) } : {};
}

export default connect(mapStateToProps, null)(AddPerson);