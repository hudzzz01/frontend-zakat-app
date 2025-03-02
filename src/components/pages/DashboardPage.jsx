import React from 'react';
import maskotImg from '../../assets/family.svg'

const DashboardPage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light-green'>
            <img className='my-4' src={maskotImg} alt="" />
           <h1 className='color-darknes-green' >Mari Berzakat </h1>
        </div>
    );
}

export default DashboardPage;
