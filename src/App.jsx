import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [alertStatus, setAlertStatus] = useState(false);

  const nameinput = useRef();
  const lastnameinput = useRef();
  const nameemail = useRef();
  const namenumber = useRef();
  const query = useRef();
  const skills=useRef();
  const cover=useRef();

  function submitHandler() {
    let currentTask = {
      name: nameinput.current.value,
      lastname: lastnameinput.current.value,
      nameEmail: nameemail.current.value,
      nameNumber: namenumber.current.value,
      Query: query.current.value,
      skills:skills.current.value,
      cover:cover.current.value
    };
    fetch("https://mern320-ddde2-default-rtdb.firebaseio.com/todos.json", {
      method: "POST",
      body: JSON.stringify(currentTask),
    }).then(() => {
      setAlertStatus(true);
    });
  }

  function closeHandler() {
    setAlertStatus(false);
  }

  return (
    <>
      <div className="container">
        <div className="form">
          <h1 className="heading">Web Design & Development Intership </h1>
          <p className="para">
            XYZ Company is offering an exciting paid internship opportunity,
            ideal for gaining hands-on experience and building skills in a
            professional environment.
          </p>
          <div className="input_fields">

          <input className="email"
              ref={nameemail}
              type="email"
              placeholder="Enter your EmailId"
              required
            />

            <input className="first"
              ref={nameinput}
              type="text"
              placeholder="Enter your name"
              required
            />
            <input className="last"
              ref={lastnameinput}
              type="text"
              placeholder="Enter your last name"
              required
            />
           
            <input className="number"
              ref={namenumber}
              type="number"
              placeholder="Enter your Number"
              required
            />

            <input type="number" className="sal" placeholder="Enter you stipend" />

            <textarea ref={skills} placeholder="Skills" rows="5" cols="63"></textarea>

            <textarea ref={cover} placeholder="Cover letter" rows="5" cols="63"></textarea>
            <textarea
              ref={query}
              placeholder="Any Queries"
              rows="5"
              cols="63"
            ></textarea>

            <button onClick={submitHandler} className="btn">
              Submit
            </button>

            <div className={alertStatus == true ? "alert" : "d-none"}>
              <div>submit the form successfully!</div>
              <svg
                onClick={closeHandler}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
