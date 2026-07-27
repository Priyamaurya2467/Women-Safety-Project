import { createContext, useState } from "react";
import pfp from "../assets/pfp.jpg";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    fullName: storedUser?.name || "",
    email: storedUser?.email || "",
    profileImage: storedUser?.profileImage || pfp,
  });

  const updateProfile = (data) => {
    const updatedProfile = {
      ...profile,
      ...data,
    };

    setProfile(updatedProfile);

    localStorage.setItem(
      "user",
      JSON.stringify(updatedProfile)
    );
  };

  return (
    <ProfileContext.Provider
      value={{ profile, updateProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};