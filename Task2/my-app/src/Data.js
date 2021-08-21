import React from "react";
import { useState, useEffect } from "react";
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap'
//import Button from '@material-ui/core/Button';

import './Data.css'




const Data = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = "https://reqres.in/api/users?page=1";



    const loadusers = async () => {
        //console.log("before");

        try {
            const response = await fetch(url);
            const result = await response.json();
            //console.log(result.data);
            setUsers(result.data);
            setLoading(true);
        }
        catch (error) {
            console.log(error, "error");

        }

    }

    useEffect(() => {

    }, [])



    return (
        <>
            <div className="backw"> 

           
            <span className="mt-5 "><a  onClick={loadusers} >getData</a></span>
            <div className="container-fluid backgr mt-5">
                <div className="row">
                    <div className="col .col-10 .col-md-4 " style={{display:"contents"}}>
                        {
                            users.map((data, key) => {

                                return (
                                    <>
                                        {
                                            loading ?
                                                <div key={key} className="cardC">

                                                    <Card style={{ width: '15rem' }}>
                                                        <Card.Img variant="top" src={data.avatar} />
                                                        <Card.Body>
                                                            <Card.Title >{data.first_name} {data.last_name}</Card.Title>
                                                            <Card.Text>
                                                                {data.email}
                                                            </Card.Text>
                                                        </Card.Body>

                                                    </Card>
                                                </div> : <Spinner animation="border" />
                                        }



                                    </>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
            </div>


        </>
    );
};

export default Data;
