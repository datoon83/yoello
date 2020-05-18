import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import BeerModal from './BeerModal.js';

const Beer = ({ beer }) => {
    const [ showModal, setShowModal ] = useState(false);

    return (<Card onClick={() => setShowModal(true) }>
        <Card.Content>
        <Image circular style={{ height: '100px', width: 'auto' }} src={beer.image_url} />
        <Card.Header>
        {beer.name}
        </Card.Header>
        <Card.Meta>
        {beer.abv}
        </Card.Meta>
        </Card.Content>

        <BeerModal open={showModal} onClose={() => setShowModal(false) } beer={beer} />
        </Card>
        )
}

export default Beer;