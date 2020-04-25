import React from 'react';
import { Table, Card, Container } from 'react-bootstrap';

export default class NewOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {

    }

    render() {
        return <Container className="padding-bot-10">
            <Card border="primary">
                <Card.Header className="text-left">New Orders</Card.Header>
                <Card.Body>
                    {this.state.orders.length === 0 ? <h5>Don't have new order</h5> : <Table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Pizza Type</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map(order => {
                                return <tr key={order.time.N}>
                                    <td>{new Date(parseInt(order.time.N)).toLocaleString()}</td>
                                    <td>{order.pizzaType.S}</td>
                                    <td>{order.address.S}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>}
                </Card.Body>
            </Card>
        </Container>
    }
}