import React from "react";
import Review from "./Review";
function App() {
  return (
    <>
      <main>
        <section>
          <div className="title">
            <h2>Nuestras Reseñas</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
}

export default App;
