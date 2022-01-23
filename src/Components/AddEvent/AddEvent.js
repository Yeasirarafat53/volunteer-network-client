import React from 'react';
import './AddEvent.css';
import logo from '../../logos/logo.png';
// import addIcon from '../../logos/addIcon.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faList } from '@fortawesome/free-solid-svg-icons'

// import fakeData from '../fakeData/fakeData';
// import { useForm } from 'react-hook-form';



const AddEvent = () => {

    // const { register, handleSubmit, watch, errors } = useForm();

    // const addNewEvent = data => {
    //     console.log('add new event', data);
    //     // POST
    //     fetch('http://localhost:5000/addEvent', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json;',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log('POST done From Admin Panel'))
    // };

    // console.log(watch("name"));

    return (

        <div className="container-fluid">
            <div className="row admin-navbar">

                <div className="col-md-3">
                    <a className="navbar-brand" href="/home">
                        <img src={logo} alt="" />
                    </a>

                    <ul className="dashboard-menu" >
                        <li>  <a href="/admin">Volunteer register list</a></li>
                        <li>   <a href="/addEvent">Add event</a></li>
                    </ul>
                    {/* style={{ listStyleType: 'none' }}
                    <FontAwesomeIcon icon={faList} />
                    <FontAwesomeIcon icon={faPlus}/> */}
                  
                </div>

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <h3>Volunteer register list </h3>

                    <div className="bg-white p-5 " onsubmit="return false">
                        <form >
                            <div className="row">
                                <div className="col form-group">
                                    <label htmlFor="title">Event Title</label>
                                    <input type="text" id="title" name="title" className="form-control bg-light" placeholder="Event title" />
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="date">Event Date</label>
                                    <input type="date" id="date" className="form-control bg-light" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="description" />
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="date">Banner</label>
                                    <input type="file" id="image" className="form-control-file" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end">
                                <input  type="submit" value="Submit" className="btn btn-primary " />
                            </div>
                        </form>


                    </div>
                </div>

            </div>
        </div >


    );
};

export default AddEvent;