import "./style.css";
import { DataItem } from "../../store/service/type";

interface UserCardProps {
  user: DataItem;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="userCard" key={user.id}>
      <img className="userPic" src={user.image} alt="User" />
      <div className="userInfo">
        <div>{`${user.firstName} ${user.lastName}`}</div>
        {user.address && user.address[0] && user.address[0].city ? (
          <div>{user.address[0].city}</div> 
        ) : (
          <div>Город не указан</div>
        )}
      </div>
    </div>
  );
};
