import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api/index';

export const fetchTodos = () => async dispatch => {
    try {
        await api.get('/testcase/actions.json')
            .then((response) => dispatch(getList(response.data)));
    }
    catch (err) {
        console.log(err);
    }
}

const actionsSlice = createSlice({
    name: 'actions',
    initialState: {
        cartItems: [],
        total: 0,
    },
    reducers: {
        getList: (state, action) => {
            state.cartItems = action.payload.map(item => ({
                ...item, selected: false
            }));
            
        },
        selectItem: (state, action) => {
            state.cartItems.map(cartItem => {
                if (cartItem.id == action.payload) {
                    const list = state.cartItems.filter(item => item.id != action.payload )
                    state.cartItems = [...list, {
                        ...cartItem, selected: true
                    }];
                    state.total = state.total += cartItem.point
                }
                return state;
            });
        },
    }
})

export const { getList, selectItem } = actionsSlice.actions;
export default actionsSlice.reducer;