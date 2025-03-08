import React from 'react'
import Nav from '../input/Nav'
import DropdownMe from '../input/DropdownMe'
import { Outlet } from 'react-router'

export default function ListPage() {
  return (
    <div className=''>
    <div className='row'>
        <div className='col-lg-2'>
            <Nav />
        </div>
        <div className='col-lg-10'>
            <div className=''>
                <div className='d-flex gap-2'>
                    <DropdownMe keyName="malam"  />
                    <DropdownMe keyName="team"  />
                </div>

                <div>
                    <Outlet />  
                </div>

            </div>
      
        </div>
    </div>
</div>
  )
}
