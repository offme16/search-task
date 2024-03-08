import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";
import { getResult } from "../../store/selectors/getResult";

export function SearchResults() {
  const users = useSelector(getResult);
  console.log(users);
  
  return (
     <div className="usersList">

    {users ?  users.map((user) => (
        <UserCard {...user} />
      )) : <div></div>}

    </div>
  );
}
