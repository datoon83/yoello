import React, { useContext } from 'react';
import { Table, Image, Button, Icon } from 'semantic-ui-react';
import CartContext from './CartContext.js'

const Cart = () => {
    const { state, cartDispatch } = useContext(CartContext);

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Beer</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell>Cost</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {state.items.map(beer => 
                {
                    return (<Table.Row>
                        <Table.Cell>
                            <Image floated='right' style={{ height: '100px', width: 'auto' }} src={beer.image_url}/>
                        </Table.Cell>
                        <Table.Cell>
                            {beer.name}
                        </Table.Cell>
                        <Table.Cell>
                            {beer.count}
                        </Table.Cell>
                        <Table.Cell>
                            £{beer.abv}
                        </Table.Cell>
                        <Table.Cell>
                            <Button icon onClick={() => cartDispatch({ type: 'remove_from_cart', beer })}>
                                <Icon name='trash' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    )
                })
            }
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell>Total</Table.Cell>
                    <Table.Cell>£{state.total}</Table.Cell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default Cart;