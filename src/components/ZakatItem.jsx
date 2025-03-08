import React from 'react'

export default function ZakatItem({ zakat }) {
    return (
        <div className='d-flex flex-column justify-content-center align-item-center'>
            <div>
                {zakat.uuid}
            </div>
            <div>
            <i class="bi bi-house-door-fill"> </i>
                fId : {zakat.id_keluarga} # keluarga {zakat.nama_kepala_keluarga}
            </div>
            <div className='d-flex ms-5 flex-directio-column'>
                {/* section anggota */}
                <ul>


                    {zakat.anggota_keluarga.map((anggota, idx) => (
                        <li className='d-block'>
                            <div className='d-flex flex-row gap-2'>

                                <div >
                                    <i class="bi bi-person-lines-fill"> </i>
                                    jId : {anggota.uuid} # <span className='text-success' > {anggota.nama} </span>
                                </div>
                                <div className='text-primary'>
                                    {anggota.bin !== "" ?
                                        <div> bin  {anggota.bin} </div>
                                        :
                                        <div> binti {anggota.binti} </div>
                                    }
                                </div>
                                <div>
                                    : {anggota.jabatan_di_keluarga}
                                </div>



                            </div>




                        </li>
                    ))}


                </ul>

                <div className='d-flex flex-column ms-2'>
                    <div>
                        Zakat : {zakat.jumlah_pembayaran_zakat}
                    </div>
                    <div>
                        Sodakoh : {zakat.jumlah_pembayaran_sodaqoh}
                    </div>
                    <div>
                        Total : {zakat.total_bayar}
                    </div>
                </div>

                <div>
                    <button className='btn btn-danger mx-3'>Delete</button>
                </div>
            </div>
        </div>
    )
}
