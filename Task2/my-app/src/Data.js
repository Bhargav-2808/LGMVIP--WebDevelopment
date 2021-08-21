import React from "react";
import { useState ,useEffect} from "react";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));



const Data = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    const url = "https://reqres.in/api/users?page=1";



    const loadusers = async () => {
        //console.log("before");
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() => {
        loadusers();
    }, [])



    return (
        <>
            <button onClick={loadusers} > getData</button>
            <ul>
                {
                    users.map((data, key) => (
                        <p key={key}>

                            {data.email ? null: <Backdrop className={classes.backdrop} open>
                                <CircularProgress color="inherit" />
                            </Backdrop>
                            }
                        </p>
                    ))
                }
            </ul>


        </>
    );
};

export default Data;
