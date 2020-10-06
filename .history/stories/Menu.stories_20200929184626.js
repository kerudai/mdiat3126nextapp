
import React from 'react';
import Menu from '../comps/Menu';

export default {
    title: 'Example/Menu',
    component: Menu
};

export const BasicMenu = () => <Menu />;
export const DefaultExpandedMenu = () => <Menu expand={true}/>;
export const ExpandWithAnotherButton = () => <div>
        <Menu expand={true} />
        <button>Expand Menu</button>
    </div>
