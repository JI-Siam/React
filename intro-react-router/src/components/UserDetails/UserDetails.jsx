import { useLoaderData } from "react-router"

export default function UserDetails(){
    const user = useLoaderData() ;
    console.log(user) ; 
    return (
        <>
            <h1>Showing user Details</h1>
        </>
    )
}