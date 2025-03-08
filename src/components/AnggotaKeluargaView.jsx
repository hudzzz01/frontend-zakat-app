import React from 'react'

export default function AnggotaKeluargaView({ anggota,idx }) {
    // console.log(anggota,"ini anggota");
    // console.log(anggota[`nama-${idx}`]);
    // console.log(anggota[`nama-0`]);
    
    
    
    return (
        <div className='mx-3 my-2'>
            <div>Anggota ke {idx+1}</div>
            <div>Nama : {anggota[`nama-${idx}`]}</div>
            {anggota[`bin-${idx}`] !== "" ?
                <div>Bin : {anggota[`bin-${idx}`]}</div>
                :
                <div>Binti : {anggota[`binti-${idx}`]}</div>
            }

            <div>Sebagai : {anggota[`jabatan_di_keluarga-${idx}`]}</div>
            <div>Alamat : {anggota[`alamat-${idx}`]} </div>

            <hr />

     
        </div>      
    )
}
