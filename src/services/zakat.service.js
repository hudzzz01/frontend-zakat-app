import axios from "axios"
import { GET_ALL_ZAKAT_PAGINATTION_API, INSERT_ZAKAT_API } from "../APU_URL"


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
        
        
    },


    listAllZakatPagination :async (page=1, itemsPerpage=2) => {
        let result
        try{
            result = await axios.get(GET_ALL_ZAKAT_PAGINATTION_API(page,itemsPerpage));
            return result
        }catch(e){
            alert("Gagal")
            alert(e.message)
            console.log(e);
        }
    }
}