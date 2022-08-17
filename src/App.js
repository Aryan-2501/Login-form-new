import React, { useState } from "react";
import { adminUser } from "./components/constant";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  function adminDetails(name, email, address, phone) {
    setNewUser({
      name: name,
      email: email,
      address: address,
      phone: phone,
    });
  }

  const Login = (details) => {
    //console.log(details);

    adminUser.map((data) => {
      if (details.email === data.email && details.password === data.password) {
        console.log("You're Logged in");

        adminDetails(data.name, data.email, data.address, data.phone);

        setUser({
          name: details.name,
          email: details.email,
        });
      }
      if (
        details.name === "" ||
        details.email === "" ||
        details.password === ""
      ) {
        setError("Fill the details with");
      } else {
        console.log("Incorrect Details");
        setError("Incorrect Details");
      }
    });
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <h3>
            Email: <span>{newUser.email}</span>
          </h3>
          <h3>
            Address: <span>{newUser.address}</span>
          </h3>
          <h3>
            Phone: <span>{newUser.phone}</span>
          </h3>

          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
