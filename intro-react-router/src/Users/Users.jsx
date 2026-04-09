import { useLoaderData } from "react-router"
import User from "../User/User";

export default function Users(){
    const users = useLoaderData() ;
    console.log(users) ;

    return (
        <>
         {users.map(user => <User key={user.id} user={user}></User>
         )}
        </>
    )
}