import React, { useEffect, useState } from 'react';

const AnggotaKeluarga = ({ anggotaKeluargaFormZakat, urutan, handleOnchenge, formData, setFormData }) => {

    const [anggotaKeluarga, setAnggotaKeluarga] = useState(anggotaKeluargaFormZakat);

    const [isBin, setIsBin] = useState(true)
    const [binVale, setBinValue] = useState({})
    const [bintiValue, setBintiValue] = useState({})

    const [isChecked, setIsChecked] = useState(false)


    const handleChangeBinValue = (e, urutan) => {

        // console.log(formData.anggota_keluarga);
        

        let newFamilyMember = [...formData.anggota_keluarga];
        newFamilyMember[urutan] = {
            ...newFamilyMember[urutan],  // Salin data sebelumnya
            // Update nilai yang diubah
            [`bin-${urutan}`]: e.target.value,
            [`binti-${urutan}`]: ""
        };

        const newFormData = {
            ...formData,
            anggota_keluarga: newFamilyMember
        }

        setFormData(newFormData)
    }

    const handleChangeBintiValue = (e, urutan) => {

        let newFamilyMember = [...formData.anggota_keluarga];
        newFamilyMember[urutan] = {
            ...newFamilyMember[urutan],  // Salin data sebelumnya
            // Update nilai yang diubah
            [`bin-${urutan}`]: "",
            [`binti-${urutan}`]: e.target.value
        };

        
        const newFormData = {
            ...formData,
            anggota_keluarga: newFamilyMember
        }

        setFormData(newFormData)

    }


    const hanldeOnCheckBinBinti = (binOrBinti, urutan) => {

        if (binOrBinti === "bin") {



            setIsBin(true)
        } else {



            setIsBin(false)
        }

    }


    const nomorUrut = urutan + 1





    useEffect(() => {

        if (!isChecked) {
            return
        }

        //jika is cheked true maka akan mengisi field keluarga ke 1 dengan data yang sesuai ada di atas

        let newFamilyMember = [...formData.anggota_keluarga];
        newFamilyMember[0] = {
            ...newFamilyMember[0],  // Salin data sebelumnya
            ["jabatab-keluarga-0"]: "kepala keluarga",      // Update nilai yang diubah
            [`nama-0`]: formData.nama_lengkap,
            ["alamat-0"]: formData.alamat
        };

        const newFormData = {
            ...formData,
            anggota_keluarga: newFamilyMember
        }

        setFormData(newFormData)






    }, [isChecked])










    return (
        <div>
            <h3>Anggota Keluarga ke {nomorUrut} </h3>
            <div class="form-check form-check-inline">
                {urutan == 0 ?
                    <div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={() => { isChecked == true ? setIsChecked(false) : setIsChecked(true) }} />
                            <label class="form-check-label" for="flexCheckChecked">
                                Samakan seperti form
                            </label>
                        </div>
                        <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "kepala-keluarga") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />


                    </div>
                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "kepala-keluarga") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />
                }
                <label class="form-check-label" for="inlineRadio1">Saya</label>
            </div>
            <div class="form-check form-check-inline">
                {urutan == 0 ?

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "istri") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />


                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "istri") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                }
                <label class="form-check-label" for="inlineRadio1">Istri Saya</label>
            </div>
            <div class="form-check form-check-inline">
                {urutan == 0 ?

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "suami") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />


                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "suami") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                }
                <label class="form-check-label" for="inlineRadio1">Suami saya</label>
            </div>
            <div class="form-check form-check-inline">
                {urutan == 0 ?

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "anak") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />


                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "anak") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                }
                <label class="form-check-label" for="inlineRadio1">Anak Saya</label>
            </div>
            <div class="form-check form-check-inline">
                {urutan == 0 ?

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "orang_tua") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />


                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "orang_tua") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                }
                <label class="form-check-label" for="inlineRadio1">Orang tua saya</label>
            </div>

            <div class="form-check form-check-inline">
                {urutan == 0 ?

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "saudara") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "saudara") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                }
                <label class="form-check-label" for="inlineRadio1">Saudara saya</label>
            </div>

            <div class="form-check form-check-inline">
                {urutan == 0 ?

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "lainya") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />


                    :

                    <input onChange={() => { handleOnchenge(`jabatan-keluarga-${urutan}`, "lainya") }} class="form-check-input" on type="radio" name={`jabatan_keluarga-${urutan}`} id="jabatan-keluarga" value="option1" />

                }
                <label class="form-check-label" for="inlineRadio1">lainya</label>
            </div>



            {/* form nama */}

            <div class="form-floating">
                {urutan == 0 ?


                    (isChecked ?
                        <textarea class="form-control" name={`nama-${urutan}`} onChange={(e) => handleOnchenge(`nama-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea" value={formData.anggota_keluarga[0]['nama-0']} disabled  ></textarea>
                        :
                        <textarea class="form-control" name={`nama-${urutan}`} onChange={(e) => handleOnchenge(`nama-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"  ></textarea>

                    )



                    :
                    <textarea class="form-control" name={`nama-${urutan}`} onChange={(e) => handleOnchenge(`nama-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"   ></textarea>
                }

                <label for="floatingTextarea" required >Nama</label>
            </div>

            <div class="form-check form-check-inline">
                <input onChange={() => hanldeOnCheckBinBinti("bin", urutan)} class="form-check-input" on type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Bin</label>
            </div>
            <div class="form-check form-check-inline">
                <input onChange={() => hanldeOnCheckBinBinti("binti", urutan)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Binti</label>
            </div>


            {
                isBin ?

                    <div class="form-floating">
                        <textarea class="form-control" onChange={(e) => { handleChangeBinValue(e, urutan) }} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Bin</label>
                    </div>

                    :

                    <div class="form-floating">
                        <textarea class="form-control" onChange={(e) => (handleChangeBintiValue(e, urutan))} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">binti</label>
                    </div>

            }


            {urutan == 0 ?


                (isChecked ?
                    <div class="form-floating">
                        <textarea class="form-control" name={`alamat-${urutan}`} onChange={(e) => handleOnchenge(`alamat-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea" value={formData.anggota_keluarga[0]['alamat-0']} disabled></textarea>
                        <label for="floatingTextarea"  >Alamat</label>
                    </div>
                    :

                    <div class="form-floating">
                        <textarea class="form-control" name={`alamat-${urutan}`} onChange={(e) => handleOnchenge(`alamat-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea" required >Alamat</label>
                    </div>

                )



                :
                <div class="form-floating">
                    <textarea class="form-control" name={`alamat-${urutan}`} onChange={(e) => handleOnchenge(`alamat-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea" required >Alamat</label>
                </div>
            }




            {/* <div class="form-floating">
                <textarea class="form-control" name={`no_telpon-${urutan}`} onChange={(e) => handleOnchenge(`nama-${urutan}`, e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea" required >No telpon</label>
            </div> */}






        </div>
    );
}

export default AnggotaKeluarga;
