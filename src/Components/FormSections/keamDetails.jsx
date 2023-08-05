import React from 'react'

const keamDetails = () => {
  return (
    <div className="KEAM-Details">
                <h3>KEAM Details : </h3>
                <form className="KEAM-Details">
                    <div className="RollKEAM-Details">
                        <label className="RollKEAM">KEAM Roll No. : </label>
                        <input type="number" placeholder='Roll No.' maxLength={10}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className='AppKEAM'>KEAM Application No. : </label>
                        <input type="number" placeholder='Application No.' maxLength={10}></input>
                        <br></br>
                        <label className='RankKEAM'>KEAM Rank : </label>
                        <input type="number" placeholder='Rank' maxLength={10}></input>
                        <br></br>
                        <label className='Allotted-Branches'>Allotted Branch : </label>
                        <select className='AllotteBranch' defaultValue="None">
                            <option value="None" disabled hidden></option>
                            <option>Computer Science And Engineering (CS)</option>
                            <option>Computer Science and Business Systems(CSBS/CU)</option>
                            <option>Electronics And Communication Engineering(EC)</option>
                            <option>Electrical And Electronics Engineering(EEE)</option>
                            <option>Electronics(VLSI Design and Technology)</option>
                            <option>Electronics And Bio-Medical Engineering(EB)</option>
                            <option>Mechanical Engineering(ME)</option>
                        </select>
                    </div>
                </form>
            </div>
  )
}

export default keamDetails