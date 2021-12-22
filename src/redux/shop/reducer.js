import ShopData from '../../utils/data/shopData';

const INITIAL_STATE = {
    collections: ShopData
};

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default collectionReducer;