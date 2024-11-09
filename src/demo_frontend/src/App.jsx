import { useState } from "react";
import { demo_backend } from "declarations/demo_backend/index";

function App() {
  const [greeting, setGreeting] = useState("");
  const [submittedNames, setSubmittedNames] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const greeting = await demo_backend.greet(name);
    setGreeting(greeting);
    const submittedNames = await demo_backend.get_submitted_names();
    setSubmittedNames(submittedNames);
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <section id="submitted-names">
        <h2>All Greeted Names</h2>
        <ul>
          {submittedNames.map((it, i) => {
            return <li key={i}>{it}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
