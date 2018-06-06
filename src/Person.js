import React from 'react';
import { Card, Icon } from 'antd';
const person = (props) => {
    const { name, location, byline, id, onDelete } = props;
    return (
        <Card title={name} extra={location} style={{width: 250}} actions={[<Icon type="delete" onClick={() => onDelete(id)}/>, <Icon type="edit" />]}>
            {byline.split("\n").map((s,i) => <div key={i}>{s}</div>)}            
        </Card>
    )
}

export default person;