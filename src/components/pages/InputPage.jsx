import React, { useContext } from 'react';
import Nav from '../input/Nav';
import DropdownMe from '../input/DropdownMe';
import { Outlet } from 'react-router';
import { AppContext } from '../context/AppProvider';
import ModalConfrimation from '../ModalConfrimation';




const InputPage = () => {
    const { team, setTeam, malam,setMalam } = useContext(AppContext)

    const convertToStringSetTeam = (newTeam) => {

        setTeam(String(newTeam))
    }

    return (
        <div className=''>
            <div className='row'>
                <div className='col-lg-2'>
                    <Nav />
                </div>
                <div className='col-lg-10'>
                    <div className=''>
                        <div className='d-flex gap-2'>
                            <DropdownMe keyName="malam" setKeyName={setMalam} />
                            <DropdownMe keyName="team" setKeyName={convertToStringSetTeam} />
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
