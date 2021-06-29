import React, {useState} from "react";
import firebaseconfig from "../../firebaseConfig";
import firebase from "firebase";
import {useHistory} from "react-router-dom";
import "../../styles/auth.css";
function Login() {
  const history = useHistory();
  const [details, setdetails] = useState({
    email: "",
    password: "",
  });
  function handledetails(e) {
    setdetails({...details, [e.target.name]: e.target.value});
  }
  console.log(details);

  const signIn = () => {
    const {email, password} = details;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        history.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="auth_outer">
      <div>
        <div className="outofnames">
          <div className="outofnames2"> Email</div>
          <div>
            {" "}
            <input type="email" name="email" onChange={handledetails}></input>
          </div>
        </div>
      </div>
      <div className="outofnames">
        <div className="outofnames2">Password</div>
        <div>
          {" "}
          <input
            type="password"
            name="password"
            onChange={handledetails}
          ></input>
        </div>
      </div>
      <div className="outofnames">
        <button onClick={signIn}>Login</button>
      </div>
    </div>
  );
}

export default Login;
