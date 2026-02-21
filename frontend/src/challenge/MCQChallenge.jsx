import React, { useState } from "react"

export function MCQChallenge({challenge, showExplanation = false}){
    
    const [selectdOption, setselectdOption] = useState(null)
    const [shouldShowExplanation,setshouldShowExplanation] = useState()

    const options = typeof challenge.options === 'string'
                    ? JSON.parse(challenge.options)
                    : challenge.options
    
    const handleOptionsSelect = (index) => {
        if (selectdOption != null) return;
        setselectdOption(index)
        setshouldShowExplanation(true)
    }

    const getOptionClass = (index) => {
        if (selectdOption === null) return "option"

        if (index === challenge.correct_answer_id){
            return "option correct"
        }
        if (selectdOption === null && index !== challenge.correct_answer_id){
            return "option Incorrect"
        }

        return "option"
    }

    return(
        <div className="challenge-display">
            <p><strong>Difficulty</strong>: {challenge.difficulty}</p>
            <p className="challenge-title">{challenge.title}</p>
            <div className="options">
                {options.map( (option,index) =>{
                    
                    <div className= {getOptionClass(index)}
                        key ={index}
                        onClick={() => handleOptionsSelect} >

                        { option }        
                        
                     </div>
                })}
            </ div>

            {shouldShowExplanation && selectdOption !==null && (
                <div className="explanation"> 
                    <h4>Explanation</h4>
                    <p>{challenge.explanation}</p>
                </ div>
            )}
        </div>
    )
}