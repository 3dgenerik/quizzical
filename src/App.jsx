import React, { useState, useEffect } from "react";
import Question from "./Question";
import { v4 as uuidv4 } from 'uuid';



function getQuestions() {
  return fetch(
    "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple"
  )
    .then((res) => res.json())
    .then((data) => {
      return data.results.map((item) => {
        const question = item.question;
        const formattedQuestion = ` ${question
          .replace(/&quot;/g, '"')
          .replace(/&Uuml;/g, "Ü")
          .replace(/&#039;/g, "'")} `;
        const answers = [...item.incorrect_answers, item.correct_answer];
        const formattedAnswers = answers.map((answer) => ` ${answer
          .replace(/&quot;/g, '"')
          .replace(/&Uuml;/g, "Ü")
          .replace(/&#039;/g, "'")} `);
        const randomOrderAnswers = formattedAnswers.sort(function () {
          return 0.5 - Math.random();
        });
        return {
          question: formattedQuestion,
          answers: randomOrderAnswers,
          correctAnswer: item.correct_answer,
          uuid: uuidv4(),
          userAnswer: userAnswer
        };
      });
    });
}



export default function App() {
  const [questions, setQuestions] = useState([]);

      useEffect(() => { 
        getQuestions().then((data) => setQuestions(data));
      }, []);
      return (
        <div>
           <Question 
            info={questions}
           />
        </div>
      );
}


function userAnswer(value, correctAnswer){
  console.log("🚀 ~ file: App.jsx:57 ~ userAnswer ~ correctAnswer:", correctAnswer)
  console.log("🚀 ~ file: App.jsx:57 ~ userAnswer ~ value:", value)
  console.log(value === correctAnswer)
}