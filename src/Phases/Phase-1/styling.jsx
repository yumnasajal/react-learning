// styling
import styles from './styling.module.css';

export const Alert = ({children, type = "success"}) => {
    return <div style={{
        backgroundColor: type === 'success' ? "#10b081" : '#ef4444',
        color: "black",
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '16px'
    }}>{children}</div>
}

export const Alerting = ({children , type = "success"}) => {
    return (
        // <div className={`alert ${type}`}>                // normal class
        <div className={`${styles.alert} ${styles[type]}`}>
             {/* modules  */}
            {children}
        </div>
    )
}

export const NewButton = () => {
    return <button className={`${styles.danger}`}>New Button</button>
}