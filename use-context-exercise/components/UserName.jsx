import { useContext } from 'react'
import UserContext from './UserContext.jsx'
export default function UserName(){
    const userName = useContext(UserContext);
    return(
        <h2>{userName}</h2>
    )

}
