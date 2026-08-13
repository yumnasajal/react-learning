// Conditional rendering

export const UserDetails = ({ name, isOnline, hideOffline }) => {
    if (hideOffline && !isOnline) {
        return null;
    }
    if (isOnline) {
        return (
            <div>
                <h3>{name}</h3>
                <span> 🟢 Online</span>
                <p>Available for chat</p>
                <button>Send Message</button>
            </div>
        )
    }
    return (
        <div>
            <h3>{name}</h3>
            <span> Offline</span>
            <p>Not Available</p>
            <small>Check back later</small>
        </div>
    )
}

//ternary conditional statememnt

export const UserDetail = ({ name = 'User', isOnline, hideOffline, isPremium, isNewUser, role }) => {
    if (hideOffline && !isOnline) {
        return null;
    }
    let roll_badge = null;
    if (role === 'Admin') {
        roll_badge = <span>🗝️ Admin</span>
    }
    else if(role === 'Moderator'){
        roll_badge = <span>👮🏻 Moderator</span>
    }
    else if (role === 'VIP'){
        roll_badge = <span>💎 VIP</span>
    }
    else{
        roll_badge = <span>🧑🏻‍🦱 User</span>
    }
    return (
        <div>
            <h3>{name}
                {isPremium &&
                <span>⭐</span>
            }
            {isNewUser &&
                <span>🎉</span>
            }
            {roll_badge}
            </h3>
            
            <span>{isOnline ? '🟢 Online' : 'Offline'}</span>
            <p>{isOnline ? 'Available for chat' : 'Not available'}</p>
            {
                isOnline ? (
                    <button>Send Message</button>
                ) : (
                    <small>Check back later</small>
                )
            }

        </div>
    )
}