import React, { useContext } from 'react';
import { Modal, Button, Image, Header } from 'semantic-ui-react';
import CartContext from './CartContext.js'

const BeerModal = ({ open, onClose, beer }) => {
    const { cartDispatch } = useContext(CartContext);

    return (
    <Modal key={beer.id} open={open} basic size='small' onClose={onClose} style={ { backgroundColor: 'white', color: 'black' } } >
    <Modal.Header style={ { color: 'black' } }>{beer.name}</Modal.Header>
    <Modal.Content image>
      <Image style={{ height: '150px', width: 'auto' }} src={beer.image_url} />
      <Modal.Description>
        <Header>{beer.tagline}</Header>
        <p>
          {beer.abv}
        </p>
        <p>{beer.description}</p>
        <ul>
            {beer.food_pairing.map(food => <li>{food}</li>)}
        </ul>
        <Button primary onClick={() => cartDispatch({type: 'add_to_cart', beer })}>Add to Cart</Button>
      </Modal.Description>
    </Modal.Content>
    </Modal>)
}

export default BeerModal;