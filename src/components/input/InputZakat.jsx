
import { Dropdown } from 'bootstrap';
import React, { useContext, useState } from 'react';
import AnggotaKeluarga from './AnggotaKeluarga';
import { AppContext } from '../context/AppProvider';
import ModalConfrimation from '../ModalConfrimation';
import { ZakatService } from '../../services/zakat.service';

const InputZakat = () => {

    const [urutanAnggota, setUrutanAnggota] = useState(1);

    const { team, setTeam, malam, setMalam } = useContext(AppContext)
    
    const [errValidation,setErrValidation] = useState({})



    const [formData, setFormData] = useState({
        "tim": "",
        "malamId": "",
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
        "anggota_keluarga": [
            {
                "nama-0": "",
                "bin-0": "",
                "binti-0": "",
                "jabatan_di_keluarga-0": "",
                "alamat-0": "",
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

        console.log(key, val);



        const index = key.split("-")[key.split("-").length - 1]

        let newFamilyMember = [...formData.anggota_keluarga];
        newFamilyMember[index] = {
            ...newFamilyMember[index],  // Salin data sebelumnya
            [key]: val      // Update nilai yang diubah
        };

        const newFormData = {
            ...formData,
            anggota_keluarga: newFamilyMember
        }

        // console.log(newFormData);



        setFormData(newFormData)




    };

  


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData,"ini submit");

      

        // console.log(team, "ini team");
        // console.log(malam, "set malam");

        const submitFormData = {
            ...formData,
            tim: team,
            malamId: malam
        }

        console.log(submitFormData);







    }

    

    const handleClickOkSubmitModal = () => {
        // alert("berhasil")

        console.log(formData,"ini form dataa");
        

        if(formData.nama_lengkap === ""){
            alert("Nama Lengkap pada bio data tidak boleh kosong")
            return
        }

        formData.anggota_keluarga.forEach((e,i) => {

            
            const namaAnggota = e[`nama-${i}`]
            
            if(namaAnggota.trim() === ""){
                alert("Nama anggota keluarga tidak boleh ada yang kosong pada anggota keluarga ke " + (i+1))
            }


            const bin = e[`bin-${i}`].trim() === ""
            const binti = e[`binti-${i}`].trim() === ""

            if(bin && binti === true){
                alert("silakan pilih 1 bin atau binti pada anggota keluarga ke " + (i+1))
            }


            const jabatan = e[`jabatan_di_keluarga-${i}`]

            if(jabatan.trim() === ""){
                alert("Silakan pilih 'Sebagai siapa ?' pada anggota keluarga ke " + (i+1) + " yang akan dizakatkan")
            }

            

            
            
        });

        let oldFamilyMember = [...formData.anggota_keluarga]
     
        
        let newFamilyMember = []

        oldFamilyMember.forEach((anggota,idx) => {
            // "nama" : "hudzaifah",
            // "bin":"c",
            // "binti":"",
            // "jabatan_di_keluarga" :"kepala keluarga",
            // "alamat" :"jalan sama kamu bisanya kapan"

            const newObjAnggotaForSend = {
                nama : anggota[`nama-${idx}`],
                bin : anggota[`bin-${idx}`],
                binti : anggota[`binti-${idx}`],
                jabatan_di_keluarga : anggota[`jabatan_di_keluarga-${idx}`],
                alamat : anggota[`alamat-${idx}`]
            }

            newFamilyMember.push(newObjAnggotaForSend)
        })

        // console.log(newFamilyMember);

        //addoObjform

        //add team and nightId

        //uuidMasjid 
        const uuidMasjid = import.meta.env.VITE_UUID_MAJID


        const fixDataForm = {...formData,anggota_keluarga : newFamilyMember,tim : team, malamId : malam,uuid_masjid : uuidMasjid}
        console.log(fixDataForm, "fix form data for seding to BE");
        
    
        

        ZakatService.insertZakat(fixDataForm)
        
    }


    const handleAddFamilyMember = () => {
        const temp = {}

        temp[`nama-${urutanAnggota}`] = "";
        temp[`bin-${urutanAnggota}`] = "";
        temp[`binti-${urutanAnggota}`] = "";
        temp[`jabatan_di_keluarga-${urutanAnggota}`] = "";
        temp[`alamat-${urutanAnggota}`] = "";



        const newFamilyMember = [...formData.anggota_keluarga, temp]



        setFormData({ ...formData, anggota_keluarga: newFamilyMember })
        setUrutanAnggota(urutanAnggota + 1)

        // console.log(formData);

    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>

                <div>
                    ini input zakat
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Nama Lengkap</span>
                        <input onChange={(e) => { handleOnChange(`nama_lengkap`, e) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Tempat Tanggal Lahir</span>
                        <div className='d-flex gap-2'>
                            <input onChange={(e) => handleOnChange(`tempat_lahir`, e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <input onChange={(e) => handleOnChange(`tanggal_lahir`, e)} type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>
                    <div className="form-floating">
                        <textarea onChange={(e) => handleOnChange(`alamat`, e)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Alamat</label>
                    </div>
                    <div class="form-floating">
                        <textarea onChange={(e) => handleOnChange(`kelurahan`, e)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kelurahan</label>
                    </div>
                    <div class="form-floating">
                        <textarea onChange={(e) => handleOnChange(`kecamatan`, e)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kecamatan</label>
                    </div>
                    <div class="form-floating">
                        <textarea onChange={(e) => handleOnChange(`kota_atau_kabupaten`, e)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">kota atau kabupaten</label>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">No Whatsapp</span>
                        <input onChange={(e) => handleOnChange(`no_hp_wa`, e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">No Hp Alternatif</span>
                        <input onChange={(e) => handleOnChange(`no_hp_alternatif`, e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input onChange={(e) => handleOnChange(`email`, e)} type="email" className="form-control" placeholder='Ex. example@example.com' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
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
                        <button type='button' onClick={() => handleAddFamilyMember()} className='btn btn-success'> Tambah Anggota keluarga </button>
                    </div>

                    {/* section zakat dan sodakoh */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Jumlah Zakat</span>
                        <input onChange={(e) => { handleOnChange(`zakat`, e) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={formData.zakat} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Jumlah Sodakoh</span>
                        <input onChange={(e) => { handleOnChange(`sodakoh`, e) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={formData.sodakoh} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default" >Jumlah fidyah</span>
                        <input onChange={(e) => { handleOnChange(`fidyah`, e) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={formData.fidyah} />
                    </div>


                    <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>

                    <ModalConfrimation data={formData} handleClickOk={handleClickOkSubmitModal} peruntukan={"zakat"} />



                </div>

            </form>
        </div>
    );
}



export default InputZakat;
