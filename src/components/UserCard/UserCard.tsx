import "./style.css";

export function UserCard(props) {
  console.log(props);
  
  return (
    <div className="userCard" key={props.id}>
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
