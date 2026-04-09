
import './User.css';
import { Link } from 'react-router';
export default function User({user}){
    console.log(user) ;

    return (
        <>
         <div className="user-card">
            <h2>${user.name}</h2>
            <h2>${user.email}</h2>
            <p><small>${user.phone}</small></p>
            <Link to={`/users/${user.id}`}>Details</Link>
         </div>
        </>
    )
}