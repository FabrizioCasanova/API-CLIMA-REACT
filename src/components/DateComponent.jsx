import React from "react";

const DateComponent = () => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    return (

        <>{date}</>

    )
}

export default DateComponent