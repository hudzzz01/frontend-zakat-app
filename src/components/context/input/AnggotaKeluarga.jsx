import React, { useState } from 'react';

const AnggotaKeluarga = ({anggotaKeluargaFormZakat,urutan}) => {

    const [anggotaKeluarga,setAnggotaKeluarga] = useState(anggotaKeluargaFormZakat);

    const [isBin, setIsBin] = useState(true)

    const hanldeOnCheckBinBinti = (newIsBin)=> {
        setIsBin(newIsBin)
    }
    const nomorUrut = urutan+1



    


    const bin = <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Bin</label>
    </div>

    const binti = <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">binti</label>
    </div>

    return (
        <div>
            <h3>Keluarga ke {nomorUrut} </h3>
             <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Saya</label>
            </div>
            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Istri Saya</label>
            </div>
            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Suami saya</label>
            </div>
            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Anak Saya</label>
            </div>
            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Orang tua saya</label>
            </div>

            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Saudara saya</label>
            </div>

            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="jabatan-keluarga" id="jabatan-keluarga" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">lainya</label>
            </div>

            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Nama</label>
            </div>

            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(true)} class="form-check-input" on type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Bin</label>
            </div>
            <div class="form-check form-check-inline">
                <input onChange={()=>hanldeOnCheckBinBinti(false)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Binti</label>
            </div>

            {
                isBin ? bin : binti
            }

           



        </div>
    );
}

export default AnggotaKeluarga;
