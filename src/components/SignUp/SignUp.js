import React, {useState} from "react";
import firebaseconfig from "../../firebaseConfig";
import firebase from "firebase";

function SignUp() {
  const [details, setdetails] = useState({
    email: "",
    password: "",
  });

  function handledetails(e) {
    setdetails({...details, [e.target.name]: e.target.value});
  }
  const signup = () => {
    const {email, password} = details;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(usercreds => {
        console.log(usercreds);
        localStorage.setItem("user", usercreds.user.$.D.a);
        window.location.reload();
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
      <button onClick={signup}>signUp</button>
    </div>
  );
}

export default SignUp;
