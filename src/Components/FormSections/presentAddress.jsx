import React from "react";

const presentaddress = ()=>{
    return(
        <div className="PresentAddress">
                <h3>Present Address : </h3>
                <form className="PresentAddressform">
                    <div className="presentAddress">
                        <label className='address'>Present Address : </label>
                        <input  type="text" className="PresentAddress" placeholder="Address" maxLength={40}></input>
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

export default presentaddress;