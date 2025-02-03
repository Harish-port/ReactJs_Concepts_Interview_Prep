const Interest = ({ data, setData,errors }) => {
  const { interests } = data;
  const handleInterestChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div className="interest-wrapper">
        <label htmlFor="coding">
          <input
            type="checkbox"
            name="coding"
            onChange={handleInterestChange}
            checked={interests.includes("coding")}
          />
          Coding
        </label>
        <label htmlFor="music">
          <input
            type="checkbox"
            name="music"
            onChange={handleInterestChange}
            checked={interests.includes("music")}
          />
          music
        </label>
        <label htmlFor="dance">
          <input
            type="checkbox"
            name="dance"
            onChange={handleInterestChange}
            checked={interests.includes("dance")}
          />
          dance
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interest;
