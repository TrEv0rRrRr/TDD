type Props = {
  name: string;
  age: number;
  bio?: string;
};

const UserProfile = ({ name, age, bio }: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      {bio ? <p>{bio}</p> : <p>No bio available</p>}
    </div>
  );
};

export default UserProfile;
