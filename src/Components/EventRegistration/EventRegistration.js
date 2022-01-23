import React, { useContext, useEffect } from 'react';
import './EventRegistration.css'
import logo from "../../logos/logo.png";
import {Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useState } from "react";



const EventRegistration = () => {
  
    const history = useHistory();

    let passedData = useContext(UserContext);
    // console.log(passedData.user[0].email);
    // console.log(passedData);
   
    const [date,setDate] = useState("");
    const [description,setDescription] = useState("");
    const [organize,setOrganize] = useState("");


// fakedata load from server 
const [data, setData] = useState([]);
  
  let email = passedData.user.loggedInUser.email;
  let name = passedData.user.loggedInUser.name;
  let title = passedData.card.setCard.name;
  let image =  passedData.card.setCard.pic;

  console.log(email,name,title,image);
  


    const handleCreate = (e) => {
        e.preventDefault();

        let data = {date,organize,email,title,name,image}
        console.log(data);

        fetch('http://localhost:5000/createProduct', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then((response) => {
            history.push("/selectedEvent")
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
    }


  
    return (
    <div className="container event-registration">
        <Link to="/home"><img src={logo} alt="" className="form-logo" /></Link>

        <form action="" className="registration-form bg-white">
            <h3>Register as a Volunteer</h3>
            <div className="form-group">
                <input  type="text" className="form-control" value={name}   placeholder="Enter name" id="" />
            </div>
            <div className="form-group">
                <input  type="email" className="form-control" value={passedData.user.loggedInUser.email}   placeholder="Enter email" id="" />
            </div>
            <div className="form-group">
                <input onChange={(e)=>setDate(e.target.value)} type="date" className="form-control" value={date} placeholder="Date" id="" />
            </div>
            <div className="form-group">
                <input  type="text" className="form-control" value={passedData.card.setCard.name}  placeholder="description" id="" />
            </div>
            <div className="form-group">
                <input onChange={(e)=>setOrganize(e.target.value)} type="text" className="form-control" value={organize}  placeholder="Organize books at the library." id="" />
            </div>

            {/* <button onClick={() => handleSelectedEvent} type="submit" className="btn btn-primary col-md-12">Registration</button> */}
             <button onClick={handleCreate}  type="submit" className="btn btn-primary col-md-12 form-group">Registration</button>
        </form>

        {
            // {"/selectedEvent/"+info.id} 
            /* onClick={() => handleSelectedEvent} */}


    </div>
  );
};

export default EventRegistration;