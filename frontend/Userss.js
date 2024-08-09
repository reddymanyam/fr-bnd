import React, { useState } from 'react'

const Userss = () => {

    const [data, setData] = useState([]);

    const getData = async() =>{
        const response = await fetch("http://localhost:3000/api/users");
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
      getData();
    }, [])
    
  return (
    <>

    </>
  )
}

export default Userss;