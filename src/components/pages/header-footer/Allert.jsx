import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";


const Allert = () => {
    const { allertMessage } = useContext(AppContext)
    const message = allertMessage;
    
    return (
        <div class="alert alert-danger" role="alert">
            {message}
        </div>
    );
}

export default Allert;
