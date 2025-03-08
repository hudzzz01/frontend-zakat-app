import axios from "axios"
import { INSERT_ZAKAT_API } from "../APU_URL"


export const ZakatService = {

    insertZakat : async (data)=>{
        let result 
        
        try{
           result = await axios.post(INSERT_ZAKAT_API,data);
        }catch(e){
            alert("Gagal")
            alert(e.message)
            console.log(e);
            
        }

        
        console.log(result);
        
        
    }

}