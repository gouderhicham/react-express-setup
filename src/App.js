import React, { useState , useEffect} from "react";
function App() {
  // input from the user
  let [name, setName] = useState("");
  // greeting message that shows after submitting form
  let [greeting, setGreeting] = useState("");
  // function that gonna send api post request with in input
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/greeting", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ message: name }),
    })
      .then((res) => res.json())
      .then((res) => setGreeting(res.greeting));
  }
  // function that update the input (name) value
  function handleChange(e) {
    setName(e.target.value);
  }
  // testing the get method request to see if it works (open console to see => message : api works ! <= this was the response from the server)
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: </label>
        <input id="name" type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
