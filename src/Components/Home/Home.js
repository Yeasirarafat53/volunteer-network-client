import React, { useContext } from 'react';
import Task from "../Task/Task";
import { useEffect, useState } from "react";
// import fakedata from "../FakeData/fakeData.json";
import "./Home.css";
import Header from "../Header/Header";
import { Form,Button } from "react-bootstrap";
import { UserContext } from '../../App';



const Home = (props) => {
  const loggedInUser = useContext(UserContext);
   


    const handleData = (product)=>{
      // console.log(product)
      loggedInUser.card.setCard = product
     
      console.log(loggedInUser)
    }
  
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // server theke fakedata load kora hoice

    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setData(data))


    // setData(fakedata);
    
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <h2 className="grow">I GROW BY HELPING PEOPLE IN NEED</h2>
        <br />

        {/* -----search bar------- */}

        <Form className="d-flex search">
          <input type="text" placeholder="Search" />
          <Button variant="success">Search</Button>
        </Form>
      </div>

<br />
<br />
      
      <div className="row">
        
        {data.map((product) => (<Task key={product.id} handleData={handleData} product={product}></Task>))}
        
      </div>
    </div>
  );
};

export default Home;
