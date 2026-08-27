import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext(null);
const UserContext = createContext(null);
const useTheme = () => {
    return useContext(ThemeContext)
}
const useUser = () => {
    return useContext(UserContext)
}
export const MainPage = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <Page />
            </UserProvider>
        </ThemeProvider>
    )
}
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggle_theme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
            <ThemeContext.Provider value={{ theme, toggle_theme }}>
        <div className={theme === 'light' ? 'bg-white text-black min-h-screen' : 'bg-black text-white min-h-screen'}>
                {children}
        </div>
            </ThemeContext.Provider>
    )
}
const UserProvider = ({ children }) => {
    const [user, setUser] = useState('Yumna');
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
const Page = () => {
    return <Layout />
}
const Layout = () => {
    return <SideBar />
}
const SideBar = () => {
    return (
        <div>
            <ThemeLabel />
            <UserLabel />
        </div>

    )
}
const ThemeLabel = () => {
    const { theme, toggle_theme } = useTheme();
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button className="text-black"  onClick={toggle_theme}>Click to toggle theme </button>
        </div>
    )

}
const UserLabel = () => {
    const { user, setUser } = useUser();
    return (
        <div>
            <p>User set to {user}</p>
            <button className="text-black" onClick={() => setUser('New User')} >Change User</button>
        </div>
    )
}
