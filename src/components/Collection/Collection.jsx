import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './Collection.scss';

const Collection = ({ title, items }) => {
    return (
        <div className="collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((_, index) => index < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    );
}

export default Collection;