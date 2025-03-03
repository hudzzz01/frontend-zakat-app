
import { Dropdown } from 'bootstrap';
import React, { useState } from 'react';
import AnggotaKeluarga from './AnggotaKeluarga';

const InputZakat = () => {

    const [formData, setFormData] = useState({
        "uuid_masjid": "56734523",
        "nama_lengkap": "",
        "tempat_lahir": "",
        "tanggal_lahir": "",
        "alamat": "",
        "kelurahan": "",
        "kecamatan": "",
        "kota_atau_kabupaten": "",
        "no_hp_wa": "",
        "no_hp_alternatif": "",
        "email": "",
        "tim": "",
        "malamId": "",
        "anggota_keluarga": [
            {
                "nama": "",
                "bin": "",
                "binti": "",
                "jabatan_di_keluarga": ""
            },
            
        ],
        "zakat": "",
        "sodakoh": "",
        "fidyah": ""
    })

    const handleOnChange = (key, e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: e.target.value
        }));

        console.log(key);
        
    };
    

    const handleAddFamilyMember = ()=> {
        const temp =  {
            "nama": "",
            "bin": "",
            "binti": "",
            "jabatan_di_keluarga": ""
        }


        const newFamilyMember = [...formData.anggota_keluarga, temp]

        setFormData({...formData, anggota_keluarga : newFamilyMember})

        console.log(formData);
        
    }


    return (
        <div>
            <form>

                <div>
                    ini input zakat
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Nama Lengkap</span>
                        <input onChange={(e)=> handleOnChange(`nama_lengkap`,e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tempat Tanggal Lahir</span>
                        <div className='d-flex gap-2'>
                            <input  onChange={(e)=> handleOnChange(`tempat_lahir`,e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <input onChange={(e)=> handleOnChange(`tanggal_lahir`,e)} type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                    <div className="form-floating">
                        <textarea  onChange={(e)=> handleOnChange(`alamat`,e)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Alamat</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kelurahan</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kecamatan</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kota atau kabupaten</label>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">No Whatsapp</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">No Hp Alternatif</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input type="text" className="form-control" placeholder='Ex. example@example.com' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <h3>Anggota keluarga : </h3>

                    {
                        formData.anggota_keluarga.map((anggota, index) => (
                            <AnggotaKeluarga anggotaKeluargaFormZakat={anggota} key={index} urutan={index} />
                        ))
                        
                    }

                    <div>
                        <button type='button' onClick={handleAddFamilyMember} className='btn btn-success'> Tambah Anggota keluarga </button>
                    </div>
                    


                </div>

            </form>
        </div>
    );
}



export default InputZakat;
