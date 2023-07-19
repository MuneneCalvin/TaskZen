import "./single.scss";

interface UserInfo {
  img?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified: boolean;
}

interface Props {
  id: number;
  user: UserInfo;
}

const Single: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {user.img && <img src={user.img} alt="" />}
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(user).map(([key, value]) => (
              <div className="item" key={key}>
                <span className="itemTitle">{key}</span>
                <span className="itemValue">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Single;
