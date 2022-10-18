import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem } from '../../app/api';
import { numberWithCommas } from '../../functions';

const EarnPoints = () => {
    const [ item, setItem ] = useState(null)
    const router = useRouter();
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.actions);

    const { id } = router.query;

    useEffect(() => {
        let todo = cartItems.find(cartItem => cartItem.id == id)
        setItem(todo);
    }, [])

    const handleClick = () => {
        if (router.asPath == `/action/view?id=${id}`) {
            dispatch(selectItem(id));

            router.push('/action/congratulations')
        }
        else if (router.asPath == '/action/congratulations') {
            router.push('/mypoints')
        }
    }
    if (!item) return <div className=''>Loading...</div>

    return (
        <div className='row earnpoints'>
            <div className='row'>
                <div className='row'>
                    <div className='cart'>
                        <Image
                            src={item.image}
                            alt="image-alt-text"
                            width={72}
                            height={72}
                        />
                        <span className='point'>+{numberWithCommas(item.point)} points</span>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
            <Button
                option='Earn points'
                handleClick={handleClick}
            />
        </div>
    )
}

export default EarnPoints