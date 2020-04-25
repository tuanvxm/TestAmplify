import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class NotiBar extends React.Component {
    render() {
        return <Row className="noti-bar">
            <Col xs={6} className="text-left"><h2>AnyCompany</h2></Col>
            <Col xs={6}></Col>
        </Row>
    }
}