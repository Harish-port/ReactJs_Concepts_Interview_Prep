import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "./userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchRequest(1)); // Fetch user with ID 1
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
