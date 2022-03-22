import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonListComp from "./components/PorsonList";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    about: "",
  });
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    getListOfPerson();
  }, []);

  const savePerson = async (pPerson) => {
    await fetch("http://localhost:3000/people", {
      method: "POST",
      body: JSON.stringify(pPerson),
      headers: { "Content-Type": "application/json" },
    });
    getListOfPerson();
  };
  const deletePerson = async (id) => {
    console.log(id);
    await fetch(`http://localhost:3000/people/${id}`, {
      method: "DELETE",
      // body: JSON.stringify(pPerson),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      // let newlist = personList.filter((item) => {
      //   return item.id !== id;
      // });
      // setPersonList(newlist);
      getListOfPerson();
    });
  };

  const getListOfPerson = async () => {
    const respone = await fetch("http://localhost:3000/people", {
      method: "GET",
    });
    const list = await respone.json();
    setPersonList(list);
    console.log(list);
  };
  const submit = (e) => {
    e.preventDefault();
    savePerson(person);
    getListOfPerson();
  };
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <form onSubmit={submit}>
            <input
              type="text"
              name="person[firstName]"
              value={person?.firstName}
              onChange={(e) =>
                setPerson({ ...person, firstName: e.target.value })
              }
            />
            <input
              type="text"
              name="person[lastName]"
              value={person?.lastName}
              onChange={(e) =>
                setPerson({ ...person, lastName: e.target.value })
              }
            />

            <input
              type="email"
              name="person[email]"
              value={person?.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />

            <input
              type="password"
              name="person[password]"
              value={person?.password}
              onChange={(e) =>
                setPerson({ ...person, password: e.target.value })
              }
            />
            <textarea
              name="person[about]"
              value={person?.about}
              onChange={(e) => setPerson({ ...person, about: e.target.value })}
            />

            <input type="submit" name="Sign Up" />
          </form>
        </div>
        <div className="col">
          <PersonListComp list={personList} deletePerson={deletePerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
