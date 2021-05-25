import React from 'react';
import './SignUpForm.css';

function SignUpForm() {
    return (
        <div className='sign-up-container'>
            <form className='sign-up-form shadow-lg p-3 mb-5 bg-body rounded'>
                <div className='form-row'>
                    <div className='col-2'>
                        <label for='firstName' >First name <span>*</span></label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-2'>
                        <label for='lastName' >Last name <span>*</span></label>
                        <input type='text' className='form-control'/>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-1'>
                        <label for='email' >Email</label>
                        <input type='email' className='form-control' />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-1'>
                        <label for='phone' >Phone number <span>*</span></label>
                        <input type='tel' className='form-control' />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-1'>
                        <label for='place' >Destination</label>
                        <select className='form-select'>
                            <option selected>choose a place...</option>
                            <option>Grand Canyon</option>
                            <option>London</option>
                            <option>Bora Bora</option>
                            <option>Tokyo</option>
                            <option>Maui</option>
                        </select>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='col-1'>
                        <label for='person' >Number of person</label>
                        <input type='number' className='form-control short-input' min='1'/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary form-btn' onClick={ 
                    () => alert('Submited sucessfully! We will contact you for more information.')
                    }>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm
