
import { Dropdown } from 'bootstrap';
import React, { useState } from 'react';
import AnggotaKeluarga from './AnggotaKeluarga';

const InputZakat = () => {
    
    const [urutanAnggota,setUrutanAnggota] = useState(1);
    

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
        "tim": "1",
        "malamId": "1",
        "anggota_keluarga": [
            {
                "nama-0": "",
                "bin-0": "",
                "binti-0": "",
                "jabatan_di_keluarga-0": "",
                "alamat-0" : "",
                "no_telepon" : "",
            },
            
        ],
        "zakat": "45000",
        "sodakoh": "",
        "fidyah": ""
    })

    const handleOnChange = (key, e) => {

      
        
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: e.target.value
        }));

        // console.log(key);
        
    };


    // console.log(formData);
    


    

    const handleOnChangeFamilyMember = (key, val) => {

        console.log(key,val);
   


        const index=key.split("-")[key.split("-").length -1]   

        let newFamilyMember = [...formData.anggota_keluarga]; 
        newFamilyMember[index] = { 
            ...newFamilyMember[index],  // Salin data sebelumnya
            [key]: val      // Update nilai yang diubah
        };

        const newFormData = {
            ...formData,
            anggota_keluarga : newFamilyMember
        }

        // console.log(newFormData);
        
      

        setFormData(newFormData)
        
        
    
        
    };

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
        
    }
    

    const handleAddFamilyMember = ()=> {
        const temp =  {}

        temp[`nama-${urutanAnggota}`] = "";
        temp[`bin-${urutanAnggota}`] = "";
        temp[`binti-${urutanAnggota}`] = "";
        temp[`jabatan_di_keluarga=${urutanAnggota}`] = "";


        const newFamilyMember = [...formData.anggota_keluarga, temp]
        
        

        setFormData({...formData, anggota_keluarga : newFamilyMember})
        setUrutanAnggota(urutanAnggota + 1)

        // console.log(formData);
        
    }


    return (    
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>

                <div>
                    ini input zakat
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Nama Lengkap</span>
                        <input onChange={(e)=> {handleOnChange(`nama_lengkap`,e)}} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
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
                        <textarea  onChange={(e)=> handleOnChange(`kelurahan`,e)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kelurahan</label>
                    </div>
                    <div class="form-floating">
                        <textarea  onChange={(e)=> handleOnChange(`kecamatan`,e)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kecamatan</label>
                    </div>
                    <div class="form-floating">
                        <textarea  onChange={(e)=> handleOnChange(`kota_atau_kabupaten`,e)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kota atau kabupaten</label>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">No Whatsapp</span>
                        <input  onChange={(e)=> handleOnChange(`no_hp_wa`,e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">No Hp Alternatif</span>
                        <input  onChange={(e)=> handleOnChange(`no_hp_alternatif`,e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input  onChange={(e)=> handleOnChange(`email`,e)} type="email" className="form-control" placeholder='Ex. example@example.com' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <h3>Anggota keluarga : </h3>

                    {
                  
                        
                        formData.anggota_keluarga.map((anggota, index) => (
                           
                            <AnggotaKeluarga 
                            anggotaKeluargaFormZakat={anggota} 
                            key={index} 
                            urutan={index} 
                            handleOnchenge={handleOnChangeFamilyMember}
                            formData={formData}
                            setFormData={setFormData}
                            />
                        ))
                        
                    }

                    <div>
                        <button type='button' onClick={()=>handleAddFamilyMember()} className='btn btn-success'> Tambah Anggota keluarga </button>
                    </div>

                    {/* section zakat dan sodakoh */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Jumlah Zakat</span>
                        <input onChange={(e)=> {handleOnChange(`zakat`,e)}} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={formData.zakat} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Jumlah Sodakoh</span>
                        <input onChange={(e)=> {handleOnChange(`sodakoh`,e)}} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={formData.sodakoh} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Jumlah fidyah</span>
                        <input onChange={(e)=> {handleOnChange(`fidyah`,e)}} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={formData.fidyah} />
                    </div>


                    <button>Submit</button>
                    


                </div>

            </form>
        </div>
    );
}



export default InputZakat;
