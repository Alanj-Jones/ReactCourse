import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  // const { id, info, title } = data;
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Preguntas y respuestas acerca del inicio de sesion</h3>
        <div>
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                info={question.info}
                title={question.title}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
