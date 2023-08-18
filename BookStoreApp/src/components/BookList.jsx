import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {Button} from "@mui/material"

const BookList = () =>{
    const nav = useNavigate()
    //it is a function which represent after clicking the button what happen
        const handlebutton = () =>{
        nav("/")
    }
    return(
        <>
        <div> here is list of books </div>
        {/* <button onClick={handlebutton}>Home</button> */}
        {/* <Button onclick = {handlebutton}>Contained</Button> */}
        <Button variant="contained" color="success" onClick={handlebutton} sx={{margin:5}}>Home</Button>
        </>
    )
}
export default BookList;