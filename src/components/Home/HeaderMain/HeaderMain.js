import React from 'react';
import chair from '../../../images/chair.png';
import '../HeaderMain/HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center firstbanner'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/>Starts Here</h1>
                <p className='text-secondary'>Treat your password like your toothbrush. Don’t let anybody else use it, and get a new one every six months!</p>
                <a href="/appointment">
                    <button className='btn btn-primary'>GET APPOINMENTS</button>
                </a>
            </div>
            <div className='col-md-6'>
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;

