import React,{ useRef ,useState } from 'react';
import'./App.css';
import Loginform from './Components/Loginform';
import Output from './Components/Output';


const App=() =>{
  
  const [requestname, setName] = useState("");
  const [requestemail, setEmail] = useState("");
  const [requestmobileNumber, setMobileNumber] = useState("");  
  const [requestpassword, setPassword] = useState("");
  const [requestusername, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  

  let handleSubmit = async (e) => {
    e.preventDefault();     
          try {

            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({email: e.target[1].value,
                name:e.target[0].value,
                mobileNum: e.target[2].value,
                password: e.target[3].value,
                username: e.target[4].value })
          };
      let res = await fetch("https://ixonotest.herokuapp.com/api/User/submit-profile",requestOptions );
      let resJson = await res.json()
      alert(JSON.stringify(resJson));
      if (res.status === 201 || res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setUsername("");        
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }     
  }; 

  let handleSubmit1 = async (e) => {
    e.preventDefault();
      let res = await fetch("https://ixonotest.herokuapp.com/api/User/get-profiles", {
      method: "GET"  
    });
    let resJson = await res.json();    
    setPosts(JSON.stringify(resJson));
     
  };

  let handleSubmit2 = async (e) => {
    e.preventDefault();       
   setPosts("");  
   console.log()   
  };


    return (
    <div className='SUMBITPROFILE'>
           
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit}>
        <Loginform
          type="text"
          value={requestname}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Loginform
          type="text"
          value={requestemail}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Loginform
          type="text"
          value={requestmobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <Loginform
          type="text"
          value={requestpassword}
          placeholder="PassWord"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Loginform
          type="text"
          value={requestusername}
          placeholder="User Name"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Submit</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
<div>
    <button onClick={handleSubmit1}>Show Details</button>

    <button onClick={handleSubmit2}>Clear</button>
    

  


</div>
<div>
<div className="message">{posts ? <p>{posts}</p> : null}</div>
</div>
</div>

  );

}
export default App;


