// ProfileContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./authContext";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [state, setState] = useContext(AuthContext);
  const userId = state.userId;

  const getProfileInformation = async () => {
    setLoading(true);
    try {
      // Make API call to get profile information based on the current login
      const { data } = await axios.get('http:10.0.2.2:3000/getProfile', {
        params: { userId },
      });
      setProfile(data.profile);
      console.log("Profile Information:", data.profile);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if userId exists before making the API call
    if (userId) {
      getProfileInformation();
    }
  }, [userId]); // Fetch profile information when userId changes

  const updateProfileInformation = async () => {
    // Call this function to update the profile information
    await getProfileInformation();
  };

  return (
    <ProfileContext.Provider value={[profile, setProfile, getProfileInformation, updateProfileInformation]}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
