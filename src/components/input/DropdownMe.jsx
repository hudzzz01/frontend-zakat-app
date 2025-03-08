import React, { useContext, useState } from 'react';

const DropdownMe = ({keyName,setKeyName}) => {
    const values = [];

    const [value,setValue] = useState(1);

    for (let i = 1; i < 31; i++) {
        values.push(i)
    }

    const handleClick = (value)=>{
 
        
        setKeyName(value)
        setValue(value)

        
    }

  

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {keyName} ke {value}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                   
                    {
                        values.map((val,index) => (
                            <li onClick={()=> handleClick(val)} key={index}><a className="dropdown-item" >{val}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default DropdownMe
