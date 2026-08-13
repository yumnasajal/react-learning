// rules of jsx

import React from 'react'

export const Hello = (props) => {
    console.log(props);
    return (
        <div id = "container">
            <h1>Hello {props.name}!</h1>
            <p>My name is Yumna Sajal and I'm a {props.alias}</p>
        </div>
    )
}

// create element without jsx
export const Greeting = () => {
    return React.createElement('div', {id: 'container1'}, 
        React.createElement('h3', null, 'Hey there yummy :D')
    )
}

export const ReFragment = () => {
    return (
        // <React.Fragment>
        <>
            <h5>No way</h5>
            <p>Ishpiderman</p>
        </>
        // </React.Fragment>
    )
}

export const ContactForm = () => {
    return(
        <form action="#" className='form'>
            <label htmlFor="name"></label>
            <input id='name' type="text" placeholder='Your Name' />
            {/* <br > without slash will cause error of no closing tag  */}
            <br />
            <input type="text" placeholder='Your email' tabIndex='1' />
        </form>
    )
}

export const UserProfile = () => {
    const name = "Peter Parker";
    const role = "Web Developer";
    const years_of_exp = 8;
    return (
        <>
            <h2>{name}</h2>
            <p>
                {role} with {years_of_exp === 5 ? years_of_exp : '4'} years of Experience
            </p>
        </>
    )
}