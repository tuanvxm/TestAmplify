import React from 'react';
import axios from 'axios';
import { Table, Card, Container } from 'react-bootstrap';

export default class Orders extends React.Component {
    _getOrder() {
        let url = "https://ru5n4b6enf.execute-api.ap-southeast-2.amazonaws.com/Test/pizza-orders";

        axios.get(url, {
            params: {}
        }).then(res => {
            console.log(res);
            this.setState({
                orders: res.data.body.Items
            })
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this._getOrder();
    }

    render() {
        return <Container>
            <Card border="secondary">
                <Card.Header className="text-left">Orders</Card.Header>
                <Card.Body>
                    {this.state.orders.length === 0 ? <h5>Loading orders.....</h5> : <Table>
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