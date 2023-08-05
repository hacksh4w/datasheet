import React from 'react'

const PersonalDetails = () => {
  return (
    <div className="personal-details-container">
            <form className="PersonalDetails">
                <h3>Personal Details:</h3>
                <div className="Name">
                    <label htmlFor="name">Name (in Block Letters) :</label>
                    <input type="text" placeholder='Name'maxLength={30}></input>
                </div>
                <div className="DOB">
                    <label htmlFor='DOB'>Date Of Birth(DD/MM/YYYY): </label>
                    <input type="date" placeholder='DD/MM/YYYYYY'></input>
                </div>
                <div className="Gender-caste-Religion">
                    <label htmlFor='Gender'>Gender: </label>
                    <select name="Gender" id="G" defaultValue="None">
                        <option value="none" disabled hidden>Select an Option</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Caste'>Caste: </label>
                    <input name="Caste" id="caste"maxLength={20}></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Religion'>Religion: </label>
                    <input name="religion" id="religion" maxLength={20}></input>

                </div>
                <div className="Nativity-Community">
                    <label htmlFor='Nativity'>Nativity: </label>
                    <input name="Nativity" id="nativity" maxLength={20}></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Community'>Community: </label>
                    <input name="Community" id="community" maxLength={20}></input>
                </div>
                <div className="Villages-Taluk">
                    <label htmlFor='Villages'>Village: </label>
                    <input name="Village" id="village" maxLength={30}></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='Taluk'>Taluk : </label>
                    <input name="Taluk" id="taluk" maxLength={30}></input>
                </div>
                <div className="Blood Group-Phone Number">
                    <label htmlFor='Blood Group'>Blood Group: </label>
                    <select name="bloodGroup" id="bloodgrp" defaultValue="None">
                        <option value="None" disabled hidden>Select Blood Group</option>
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
                    <label htmlFor='Phone Number'> Student's Mobile: </label>
                    <input type="number" maxLength={15}></input>
                </div>
                <div className="Email-AnnualIncome">
                    <label htmlFor='Email'>Email: </label>
                    <input type="email" maxLength={50} name="email"></input>
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor='annualIncome'>Annual Income Of Parents: </label>
                    <input type="number" name="annualIncome" maxLength={9}></input>
                </div>
                </form>
            </div>
  )
}

export default PersonalDetails