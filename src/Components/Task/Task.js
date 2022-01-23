import React, { useContext,useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./Task.css";
import UserContext from "../../App"



const Task = ({product,handleData}) => {
  //  const passData = useContext(UserContext);
    // console.log(loggedInUser)
  // const [productData, setProductData] = useState({})
  

 
  
  // const history = useHistory()
  
//   const handleRegister = () =>{
//     history.push("/eventRegistration")
// }

  

  return (
    <div className="col-md-3 ">
      <Container>

      
        <Card onClick={()=>handleData(product)}  >
         <Link to ="/eventRegistration">
           <Card.Img variant="top" src={product.pic} />
         </Link>

          <Card.Body>
            <Card.Title   className="title">{product.name}</Card.Title>
            <br />
           {/* <button onClick={handleAddProduct}>add product</button> */}

          </Card.Body> 
        </Card>
      
        {/* {"/selectedEvent/"+info.id} */}

      </Container>
     

    </div>
  );
};

export default Task;
