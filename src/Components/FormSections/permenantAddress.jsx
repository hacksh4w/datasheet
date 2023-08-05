import React from "react";

const permenantAddress =()=>{
    return(
        <div className="PermenantAddress">
                <h3>Permanent Address: </h3>
                <form className="PermenantAddress">
                    <div className="PermenantAddress">
                        <label className='Address'>Permanent Address : </label>
                        <input type="text" className="PermenantAddress" placeholder="Address" maxLength={40}></input>
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
    )
}

export default permenantAddress;