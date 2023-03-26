import React, { useState, useEffect } from "react";


export default function Question(props){
    return( props.info.map(item => {
        return (
            <main key={item.uuid}>
                <h3>{item.question}</h3>
                    <button onClick={()=>item.userAnswer(item.answers[0], item.correctAnswer)}>{item.answers[0]}</button>
                    <button onClick={()=>item.userAnswer(item.answers[1], item.correctAnswer)}>{item.answers[1]}</button>
                    <button onClick={()=>item.userAnswer(item.answers[2], item.correctAnswer)}>{item.answers[2]}</button>
                    <button onClick={()=>item.userAnswer(item.answers[3], item.correctAnswer)}>{item.answers[3]}</button>
            </main>
        )
    })
)
}