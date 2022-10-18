import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import { useRouter } from 'next/router';
import tick from '../../public/tick.png';

const Congrat = () => {
    const router = useRouter();
    
    const handleClick = () => {

        if (router.asPath == '/action/view') {
            router.push('/action/congratulations')
        }
        else if (router.asPath == '/action/congratulations') {
            router.push('/mypoints')
        }
    }
    return (
        <div className='congrats'>
            <div>
                <Image
                    src={tick}
                    alt="image-alt-text"
                    width={72}
                    height={72}
                />
                <h5>Phasellus et sem eget</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <Button
                option='Close'
                handleClick={handleClick}
            />
        </div>
    )
}

export default Congrat