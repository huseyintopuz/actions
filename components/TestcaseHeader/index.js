import React from 'react';
import Link from 'next/link';
import { numberWithCommas } from '../../functions';
import { useSelector } from 'react-redux';

const TestcaseHeader = () => {
  const { total } = useSelector(state => state.actions);

  return (
    <header className='container-fluid title'>
      <Link href="/">
        <a>
          <p>TestCase<span>&nbsp;APP</span></p>
        </a>
      </Link>
      <div className='title--points'>
        <span>Points:</span>
        <span>&nbsp;{numberWithCommas(total)}</span>
      </div>
    </header>
  )
}

export default TestcaseHeader