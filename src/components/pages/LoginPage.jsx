import React from 'react';
import profilThumnail from '../../assets/profile.svg'

const LoginPage = () => {
    return (
        <div>
            <form>
                <div className='d-flex flex-column justify-content-center align-items-center gap-3 my-5'>
                    <div >
                        <img src={profilThumnail} class="circle mx-auto d-block w-25" alt="..." />
                    </div>
                    <div>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text" htmlFor="username">Username</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id='username' />
                        </div>
                    </div>
                    <div>
                        <div class="input-group input-group-lg">
                            <span class="input-group-text" htmlFor="username">password. </span>
                            <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id='username' />
                        </div>
                    </div>
                    <div className='my-3 d-flex justify-content-center align-items-center' style={{ width: "100%" }} >
                        <button className='btn btn-outline-success py-3 rounded w-25' >Login</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default LoginPage;
