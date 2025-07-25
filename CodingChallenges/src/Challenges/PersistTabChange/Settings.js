const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleSettingsChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <label htmlFor="music">
        <input
          type="checkbox"
          name="dark"
          onChange={handleSettingsChange}
          checked={theme === "dark"}
        />
        Dark
      </label>
      <label htmlFor="music">
        <input
          type="checkbox"
          name="light"
          onChange={handleSettingsChange}
          checked={theme === "light"}
        />
        Light
      </label>
    </div>
  );
};

export default Settings;
