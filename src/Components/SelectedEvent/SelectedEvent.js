import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from '../../App';
// import logo from "../../logos/logo.png";
// import { Container, Nav, Navbar,Button, Form} from "react-bootstrap";
// import { useParams } from "react-router-dom";
import Header from "../Header/Header";
// import  fakedata  from "../FakeData/FakeData.json";
import fakedata from "../FakeData/fakeData.json";
import { UserContext } from "../../App";

const SelectedEvent = (props) => {
  const [task, setTask] = useState([]);
  const [id, setId] = useState();

  let loggedInUser = useContext(UserContext);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/tasklist?email=" + loggedInUser.user[0].email, {
  //       method: "GET",

  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setTask(data));
  //   },);

  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  // FAKEDATA guloke database a pathano hoice......
  const handleAddProduct = () => {
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fakedata),
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/taskdelete/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully')
            setId(data);
        })
}

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const {pdkey} =  useParams();

  // const product = fakedata.find(pd => pd.id == pdkey);
  // console.log(product);

  return (
    <div className="container">
      <Header></Header>

      <h2>Selected Item's</h2>

      <button onClick={handleAddProduct}>add product</button>
      <h3>You have : {task.length} bookings</h3>

      {task.map((list) => (
        <>
          {/* <li> {list.title} </li>
          <p>{list.name}</p>
          <img src={list.image} alt="" /> */}

          <div
            class="card d-flex float-left"
            style={{ width: "30%", margin: "10px" }}
          >
            <img
              src={list.image}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-text">{list.title}</h3>
            </div>
            <div class="d-flex align-items-end flex-column">
              <div class="mt-auto p-2">
                <button
                  class="btn btn-primary"
                  onClick={() => handleDelete(list._id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
// {/* onClick={() => handleDelete(_id)} */}

export default SelectedEvent;
