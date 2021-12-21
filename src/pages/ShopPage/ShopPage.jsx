import React, { Component } from 'react';

import Collection from '../../components/Collection/Collection';
import ShopData from './../../utils/data/shopData';

import './ShopPage.scss';

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: ShopData
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shoppage">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <Collection key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;