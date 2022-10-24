import React, { useContext, useLayoutEffect } from 'react';
import { AuthContext } from '../context/auth-context';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cover from '../public/cover.jpg';

const Intro = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext);

    useLayoutEffect(() => {
        authContext?.isUserAuthenticated
        ? router.push('/')
        : router.push('/intro')
    }, []);

    const handleClick = () => {
        router.push('/')
    }

    return (
        <div className='container intro'>
            <div className='row entrance'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 intro--title'>
                    <p>TestCase<span>&nbsp;APP</span></p>
                    <span>“Pixel Perfect”</span>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-9 intro--cover'>
                    <Image
                        src={cover}
                        alt="Picture of the author"
                        width={300}
                        height={272}
                        layout="intrinsic"
                    />
                </div>
                <div className='col-xxl-6 col-xl-5 col-lg-7 col-md-9 col-sm-8 col-xxs-12 intro--welcome'>
                    <div className='wrap'>
                        <div className='app'>
                            <h5>Welcome to the TestCase APP!</h5>
                            <p>We created this exercise to gain insights about <br /> your development skills.</p>
                        </div>
                        <div className='start'>
                                <button onClick={handleClick}>Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro