import React, { useReducer } from 'react';
import './App.css';
import { Tab } from 'semantic-ui-react';
import { CartProvider } from './CartContext.js'
import { cart, cartInitialState } from './Cart/reducer.js';
import { swipePanes, panesInitialState } from './SwipePanes/reducer.js';
import Cart from './Cart.js';
import SwipeTab from './SwipeTab.js';

function App() {
    const [paneState, dispatch] = useReducer(swipePanes, panesInitialState)
    const [state, cartDispatch] = useReducer(cart, cartInitialState)

    const panes = [ {
        menuItem: { key: 'BeersWithPizza', icon: 'food', content: 'Beers with Pizza' },
        render: () => <SwipeTab dispatch={dispatch} food='pizza' />,
    }, {
        menuItem: { key: 'BeersWithSteak', icon: 'users', content: 'Beers with Steak' },
        render: () => <SwipeTab dispatch={dispatch} food='steak' />,
    }, {
        menuItem: { key: 'AllBeers', icon: 'beer', content: 'All Beers' },
        render: () => <SwipeTab dispatch={dispatch} food='all' />,
    }, ]

  return (
    <CartProvider value={{ state, cartDispatch }}>
        <div className="App">
            <Tab activeIndex={paneState.activeIndex} onTabChange={(event, data) => dispatch({type: 'change', activeIndex: data.activeIndex })} panes={panes} />
        </div>
        <Cart/>
    </CartProvider>
  );
}

export default App;