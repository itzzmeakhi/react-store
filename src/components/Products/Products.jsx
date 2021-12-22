import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';
import { selectCollectionProducts } from './../../redux/shop/selectors';

import './Products.scss';

const Products = () => {
    const { categoryId } = useParams();
    const collection = useSelector(selectCollectionProducts(categoryId));
    const { title, items } = collection;
    return (
        <div className="products">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Products;