import React from 'react'

const gaurdianDetails = () => {
  return (
    <div className="Fathers/Guardian-details">
                <form className="Fathers/Guardian-details">
                    <h3>Fathers/Guardians Details:</h3>
                    <div className='Name-Occupation'>
                        <label className='Name'>Name: </label>  
                        <input type="text" className="name" placeholder="Name"maxLength={30}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Occupation'>Occupation: </label>
                        <input type="text" className="occupation" placeholder="Occupation" maxLength={30}></input>
                    </div>
                    <div className="email-phone">
                        <label className='email'>Email: </label>
                        <input type="email" className="email" placeholder="Parent's Email" maxLength={50}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Phone' placeholder="Phone">Phone Number 1 : </label>
                        <input type="number" className="phone" placeholder="Phone Number" maxLength={15}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Phone' placeholder="Phone">Phone Number 2 : </label>
                        <input type="number" className="phone" placeholder="Phone Number" maxLength={15}></input>
                    </div>
                </form>
            </div>
  )
}

export default gaurdianDetails