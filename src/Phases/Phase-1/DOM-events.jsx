// dom events

export const CustomBtn = ({ text }) => {
    const handle_click = () => {
        console.log('clicked');
        console.log('You clicked', text)
    }
    return <button onClick={handle_click}>{text}</button>
}

export const Contact = () => {
    const handle_send_msg = () => {
        console.log('Sending your message')
    }
    return (
        <div>
            <h3>Contact Us</h3>
            <ActionBtn text="Send Message" on_click={handle_send_msg} />
        </div>
    )
}

export const NewsLetter = () => {
    const handle_sub_event = () => {
        console.log('Thank you for subscribing');
    }
    return (
        <div>
            <h2>Subscribe to NewsLetter</h2>
            <ActionBtn text="Subscribe" on_click={handle_sub_event} />
        </div>
    )
}

export const Menu = () => {
    const handle_order = (item_name) => {
        console.log(`You ordered: ${item_name}`)
    }
    return (
        <div>
            <h2>
                Our Menu
            </h2>
            <MenuItem name='Pizza' price={12} on_order={() => handle_order('Pizza')} />
            <MenuItem name='Burger' price={8} on_order={() => handle_order("Burger")} />
            <MenuItem name='Salad' price={6} on_order={() => handle_order("Salad")} />
        </div>
    )
}

const MenuItem = ({ name, price, on_order }) => {
    return (
        <div>
            <span>{name} - ${price}</span>
            <ActionBtn on_click={on_order} text='Order' />
        </div>
    )
}

import { useState } from "react";

const ActionBtn = ({ text, on_click }) => {
    return <button onClick={on_click}>{text}</button>
}

export const MovieSection = () => {
    const [watchedMove, setWatchedMovie] = useState('');
    const handle_watch = (name) => {
        // document.querySelector('#message').textContent =  `You are watching: ${name}`;
        setWatchedMovie(`You are watching ${name} :D`);
    }
    return (
        <div>
            <MovieItem name='Interstellar' star={9} on_watch={() => handle_watch('Interstellar')} />
            <MovieItem name='Inception' star={8.8} on_watch={() => handle_watch('Inception')} />
            <MovieItem name='Avatar' star={7.8} on_watch={() => handle_watch('Avatar')} />
                {/* <p id="message"></p> */}
                <p id="movie_message">{watchedMove}</p>
        </div>
    )
}

const MovieItem = ({name, star, on_watch}) => {
    return(
        <div>
            <span>{name} - ⭐{star}</span>
            <ActionBtn on_click={on_watch} text='Watch'/>
        </div>
    )
}
