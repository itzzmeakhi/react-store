import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collection from './../Collection/Collection';

import { selectShopCollectionForPreview } from './../../redux/shop/selectors';

import './CollectionOverview.scss';


const CollectionOverview = ({ collections }) => {
    console.log("=> collections", collections)
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <Collection key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);