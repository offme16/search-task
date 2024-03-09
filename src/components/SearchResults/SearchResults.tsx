import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";
import { getResult } from "../../store/selectors/getResult";

export function SearchResults() {
  const users = useSelector(getResult);
  
  return (
    <div className="usersList">
      {users?.length ?  users.map((user) => (
        <UserCard key={user.id} user={user} />
      )) : <div>Пользователь не найден</div>}
    </div>
  );
}