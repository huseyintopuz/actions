import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { numberWithCommas } from '../../functions';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const { cartItems } = useSelector(state => state.actions);

    return (
        <div className='home container'>
            <div className='home--actions row'>
                <h4>Actions to be completed</h4>
                <ul className='row'>
                    {cartItems?.length && cartItems.map(item => {
                        if (!item?.selected) {
                            return (
                                <li key={item.id} className='row'>
                                    <Link href={{ pathname: '/action/view', query: { id: item.id } }}>
                                        <a className=''>
                                            <div className='col-xxs-auto col-sm-auto image'>
                                                <Image
                                                    src={item.image}
                                                    alt="image-alt-text"
                                                    width={36}
                                                    height={36}
                                                />
                                            </div>
                                            <div className='info'>
                                                <div>
                                                    <h5>{item.title}</h5>
                                                    <span>+{numberWithCommas(item.point)}</span>
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            )
                        } else return null;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HomePage