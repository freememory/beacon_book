import React from 'react';
import { Card, Icon } from 'antd';
const person = (props) => {
    const { name, location, byline, id, onDelete, onEdit } = props;
    return (
        <Card title={name} extra={location} style={{width: 250}} actions={[<Icon type="delete" onClick={() => onDelete(id)}/>, <Icon type="edit" onClick={() => onEdit(id)}/>]}>
            {byline.split("\n").map((s,i) => <p key={i}>{s}</p>)}            
        </Card>
    )
}

export default person;