import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/questions")
    .then((r) => r.json())
    .then(questions => setQuestions(questions))
  }, [])

  /*function handleSubmit () {
    const addQuestion = [...questions,newQuestion]
    setQuestions(addQuestion)
  }*/

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions}/>}
    </main>
  );
}

export default App;