import React from 'react'
import AnggotaKeluargaView from './AnggotaKeluargaView'

export default function BiodataView({ data }) {
    return (
        <div>
            <div>Team input : {data.tim}</div>
            <div>Malam ke : {data.malamId}</div>
            <div>Bio data </div>
            <div>Nama lengkap : {data.nama_lengkap}</div>
            <div>Tempat Lahir : {data.tempat_lahir}</div>
            <div>Tanggal lahir : {data.tanggal_lahir}</div>
            <div>alamat : {data.alamat}</div>
            <div>keluarahan : {data.kelurahan}</div>
            <div>kecamatan : {data.kecamatan}</div>
            <div>kota/kabupaten : {data.kota_atau_kabupaten}</div>
            <div>No Whatsapp : {data.no_hp_wa}</div>
            <div>No Hp Alternatif : {data.no_hp_alternatif}</div>
            <div>Email : {data.email}</div>

            {data.anggota_keluarga.map((anggota,idx)=>(
                 <AnggotaKeluargaView anggota={anggota} idx={idx} />
            ))}

            <div>Jumlah zakat : {data.zakat}</div>
            <div>Jumlah Sodakoh : {data.sodakoh}</div>
            <div>Jumlah fidyah : {data.fidyah}</div>
           
        </div>
    )
}
