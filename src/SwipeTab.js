import React from 'react';
import { Tab } from 'semantic-ui-react';
import Swipe from 'react-easy-swipe';
import ListView from './ListView.js';

const SwipeTab = ({ dispatch, food }) => (
    <Swipe onSwipeRight={() => dispatch({type: 'right' })} onSwipeLeft={() => dispatch({type: 'left'})}>
    <Tab.Pane>
    <ListView food={food} />
    </Tab.Pane>
    </Swipe>)

export default SwipeTab;