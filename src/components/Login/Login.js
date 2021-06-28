import React, {useState} from "react";
import firebaseconfig from "../../firebaseConfig";
import firebase from "firebase";
function Login() {
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
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        email:<input type="email" name="email" onChange={handledetails}></input>
      </div>
      <div>
        password:
        <input type="password" name="password" onChange={handledetails}></input>
      </div>
      <button onClick={signIn}>signIn</button>
    </div>
  );
}

export default Login;
