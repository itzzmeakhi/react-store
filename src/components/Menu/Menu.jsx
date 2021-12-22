import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/MenuItem';
import { selectMenuSections } from './../../redux/menu/selectors';

import './Menu.scss';

const Menu = ({ sections }) => {
    return (
        <div className="menu">
            {sections.map(({ id, title, imageUrl, size }) => (
                <MenuItem 
                    key={id} 
                    title={title} 
                    imageUrl={imageUrl}
                    size={size} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
});

export default connect(mapStateToProps)(Menu);