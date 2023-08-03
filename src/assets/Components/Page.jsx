import React from 'react';

const Page =()=>{
    return(
        <div className="ui-page">
            <div className="personal-details-container">
            <form className="PersonalDetails">
                <h3>Personal Details:</h3>
                <div className="Name">
                    <label htmlFor="name">Name (in Block Letters) :</label>
                    <input type="text" placeholder='Name'maxLength='30'></input>
                </div>
                <div className="DOB">
                    <label htmlFor='DOB'>Date Of Birth(DD/MM/YYYY): </label>
                    <input type="date" placeholder='DD/MM/YYYYYY'></input>
                </div>
                <div className="Gender-caste-Religion">
                    <label htmlFor='Gender'>Gender: </label>
                    <select name="Gender" id="G">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Caste'>Caste: </label>
                    <input name="Caste" id="caste"maxLength="20"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Religion'>Religion: </label>
                    <input name="religion" id="religion" maxLength="20"></input>

                </div>
                <div className="Nativity-Community">
                    <label htmlFor='Nativity'>Nativity: </label>
                    <input name="Nativity" id="nativity" maxLength="20"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Community'>Community: </label>
                    <input name="Community" id="community" maxLength="20"></input>
                </div>
                <div className="Villages-Taluk">
                    <label htmlFor='Villages'>Village: </label>
                    <input name="Village" id="village" maxLength="30"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Taluk'>Taluk : </label>
                    <input name="Taluk" id="taluk" maxLength="30"></input>
                </div>
                <div className="Blood Group-Phone Number">
                    <label htmlFor='Blood Group'>Blood Group: </label>
                    <select name="bloodGroup" id="bloodgrp">
                        <option value="None" selected disabled hidden>Select Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>Others</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Phone Number'>Student's Mobile: </label>
                    <input type="number" maxLength="15"></input>
                </div>
                <div className="Email-AnnualIncome">
                    <label htmlFor='Email'>Email: </label>
                    <input type="email" maxLength="50" name="email"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='annualIncome'>Annual Income Of Parents: </label>
                    <input type="number" name="annualIncome" maxLength="8"></input>
                </div>
                </form>
            </div>
            <div className="Fathers/Guardian-details">
                <form className="Fathers/Guardian-details">
                <h3>Fathers/Guardians Details:</h3>
                <div className='Name-Occupation'>
                    <label className='Name'>Name: </label>  
                    <input type="text" className="name" placeholder="Name"maxLength="30"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label className='Occupation'>Occupation: </label>
                    <input type="text" className="occupation" placeholder="Occupation"></input>
                </div>
                <div className="email-phone">
                    <label className='email'>Email: </label>
                    <input type="email" className="email" placeholder="Parent's Email"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label className='Phone' placeholder="Phone">Phone Number 1 : </label>
                    <input type="number" className="phone" placeholder="Phone Number"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label className='Phone' placeholder="Phone">Phone Number 2 : </label>
                    <input type="number" className="phone" placeholder="Phone Number"></input>
                </div>
                </form>
            </div>
            <div className="PermenantAddress">
                <h3>Permanent Address: </h3>
                <form className="PermenantAddress">
                    <div className="PermenantAddress">
                        <label className='Address'>Permanent Address : </label>
                        <input type="text" className="PermenantAddress" placeholder="Address" maxLength="40"></input>
                        <br></br>
                        <label className='Pin'>Pin Code : </label>
                        <input type="text" className="PermenantPinCode" placeholder="PIN" maxLength={7}></input>
                        <br></br>
                        <label className='District'>District : </label>
                        <input type="text" className="PermenantDistrict" placeholder="District" maxLength={30}></input>
                        <br></br>
                        <label className='State'>State : </label>
                        <input type="text" className="State" placeholder="State" maxLength={30}></input>
                    </div>
                </form>
            </div>
            <div className="PresentAddress">
                <h3>Present Address : </h3>
                <form className="PresentAddressform">
                    <div className="presentAddress">
                        <label className='address'>Present Address : </label>
                        <input  type="text" className="PresentAddress" placeholder="Address"></input>
                        <br></br>
                        <label className='Pin'>Pin Code : </label>
                        <input type="text" className="PermenantPinCode" placeholder="PIN" maxLength={7}></input>
                        <br></br>
                        <label className='District'>District : </label>
                        <input type="text" className="PermenantDistrict" placeholder="District" maxLength={30}></input>
                        <br></br>
                        <label className='State'>State : </label>
                        <input type="text" className="State" placeholder="State" maxLength={30}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page;