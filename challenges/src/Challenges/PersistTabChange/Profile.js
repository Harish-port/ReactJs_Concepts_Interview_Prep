const Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="profile-tab">
      <div>
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div>
        <label htmlFor="Age">Age :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      <div>
        <label htmlFor="Email">Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;
