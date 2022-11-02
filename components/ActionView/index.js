import React from 'react';
import EarnPoints from '../EarnPoints';

const ActionView = () => {
    return (
        <div className='container-fluid action-view'>
            <div className='row earn'>
                <div className="col-7 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-4 ">
                    <EarnPoints />
                </div>
            </div>
        </div>
    )
}

export default ActionView