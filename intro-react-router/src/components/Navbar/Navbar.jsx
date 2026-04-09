import { Link } from "react-router"
export default function Navbar(){
    return (
        <>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </ul>
        </>
    )
}