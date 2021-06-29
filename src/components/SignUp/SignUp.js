import React, {useState} from "react";
import firebaseconfig from "../../firebaseConfig";
import firebase from "firebase";
import "../../styles/auth.css";
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
        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}

export default SignUp;
