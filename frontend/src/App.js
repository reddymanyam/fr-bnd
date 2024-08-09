import './App.css';
import { useState, useEffect} from 'react';

function App() {

  const [value, setValue] = useState({
    username:"",
    email:""
  })

  const handleSubmit = (e) =>{
      e.preventDefault();
      alert("login succesfull")
  }

  const [data, setData] = useState([]);

    const getData = async() =>{
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
      getData();
    }, [])

  return (
    <>
    
    <div className="App">
     <form onClick={handleSubmit} >
      <label>UserName</label>
      <input type='text' placeholder='enter your name' value={value.username} onChange={(e)=>setValue({...value, username:e.target.value})} required />
      <label>Email</label>
      <input type='email' placeholder='abcd123@gmail.com' value={value.email} onChange={(e)=>setValue({...value, email:e.target.value})} required />
      <button type='submit'>Login</button>
     </form>
    </div>
    </>
  );
}

export default App;
