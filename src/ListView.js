import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import Beer from './Beer.js';

const ListView = ({ food }) => {
  const [ beers, setBeers ] = useState([]);

  const urls = {
    'all': 'https://api.punkapi.com/v2/beers',
    'pizza': 'https://api.punkapi.com/v2/beers?food=pizza',
    'steak': 'https://api.punkapi.com/v2/beers?food=steak'
};

useEffect(() => {
    fetch(urls[food])
    .then(response => response.json())
    .then(data => setBeers(data));
}, [beers]);

return (<Card.Group>
    {beers.map(beer => <Beer key={beer.id} beer={beer} />)}
    </Card.Group>)
}

export default ListView;