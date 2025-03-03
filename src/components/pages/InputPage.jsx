import React from 'react';
import Nav from '../context/input/Nav';
import DropdownMe from '../context/input/DropdownMe';
import { Outlet } from 'react-router';




const InputPage = () => {
    return (
        <div className=''>
            <div className='row'>
                <div className='col-lg-2'>
                    <Nav />
                </div>
                <div className='col-lg-10'>
                    <div className=''>
                        <div className='d-flex gap-2'>
                            <DropdownMe keyName="malam" />
                            <DropdownMe keyName="team" />
                        </div>

                        <div>
                            <Outlet />
                        </div>

                    </div>
              
                </div>
            </div>
        </div>
    );
}

export default InputPage;
