import React from "react";

const qualificationExam = ()=>{
    return(
        <div className="Qualification-Exam">
                <h3>Qualifying Examination Details: </h3>
                <form className="Qualification">
                    <div className="Qualification-Exam">
                        <label className="Exam-Label">Qualifying Exam : </label>
                        <input type="text" className="Exam" placeholder="Exam" maxLength={30}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className="Exam-LabelRegno">Reg. No. Qual. Exam : </label>
                        <input type="text" className="Exam" placeholder="Reg. No." maxLength={30}></input>
                    </div>
                    <div className="Qualifying-Board">
                        <label className='Board'>Qualifying Board : </label>
                        <input type="text" className="Board" placeholder="Qualifying Board" maxLength={50}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Percentage'>Percentage : </label>
                        <input type='float' className='Percentage' placeholder="Percentage" maxLength={5}></input>
                        &nbsp;&nbsp;&nbsp;
                        <label className='Year'>Year : </label>
                        <input type="year" placeholder="Year" maxLength={4}></input>
                    </div>
                    <div className='NameOfInstitution'>
                        <label className="InstitutionName">Name Of Institution : </label>
                        <input type="text" placeholder="Institution Name" maxLength={50}></input>
                    </div>
                </form>
            </div>
    )
}

export default qualificationExamination;