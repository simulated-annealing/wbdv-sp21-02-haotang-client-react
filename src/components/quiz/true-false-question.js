import React, { useState } from 'react'

const TrueFalseQuestion = ({q}) => {

    const choices = ["true", "false"]
    const [truth, setTruth] = useState(0)
    const [grade, setGrade] = useState(false)
    const [itemsState, setItemsState] = useState(Array(choices.length).fill("list-group-item Cursor-Pointer"))

    return (
    <div>
    <h4 className="Inline-Display">{q.question}</h4>
    {grade && q.correct === choices[truth-1] && <i className="fas fa-check Green-Icon fa-lg float-right"></i>}
    {grade && q.correct !== choices[truth-1] && <i className="fas fa-times Red-Icon fa-lg float-right"></i>}
    <ul className="list-group"> 
    {
        choices.map((c, idx) => 
            <li key={idx} className={`${itemsState[idx]}`}
                onClick = {() => {if(!grade) setTruth(idx+1)}} checked={truth === idx+1}>
                <input type="radio" name={q._id} value="TRUE" onChange={()=>0} checked={truth === idx+1}/>
                    {`\t${c}`}
                {grade && q.correct === choices[idx] && <i className="fas fa-check float-right"></i>}
                {grade && q.correct !== choices[idx] && truth === idx+1 && <i className="fas fa-times float-right"></i>}
            </li>)

    }
    </ul>
    Your answer: {truth !== 0 ? choices[truth-1] : ''}
    <br/>
    <button className="btn btn-success" disabled={grade} onClick={() => {
        if (truth === 0) {
            alert("You haven't select an answer!")
            return
        }
        setItemsState(itemsState.map((_, idx) => {
            if (q.correct === choices[idx]) return "list-group-item list-group-item-success Cursor-Pointer" 
            if (truth === idx+1) return "list-group-item list-group-item-danger Cursor-Pointer" 
            return "list-group-item Cursor-Pointer"}))
        setGrade(true)}}>
        Grade
    </button>
    </div>)
}

export default TrueFalseQuestion