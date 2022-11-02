import React from 'react';
import { numberWithCommas } from '../../functions';
import { useSelector } from 'react-redux';

const Points = () => {
    const { cartItems } = useSelector(state => state.actions);

    return (
        <div className='container-fluid mypoints'>
            <div className='mypoints--completed'>
                <h4>Completed actions</h4>
                <ul>
                    {cartItems?.length && cartItems.map(item => {
                        if (item?.selected) {
                            return (
                                <li key={item.id}>
                                    <span>{item.title}</span>
                                    <span>+{numberWithCommas(item.point)}</span>
                                </li>
                            )
                        } else return null;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Points