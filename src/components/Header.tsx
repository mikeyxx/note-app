import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMode, setDarkMode }: Props) => {
  return (
    <main className="headerContainer">
      <h1>Notes</h1>
      {darkMode ? (
        <BsFillSunFill
          className="moon"
          size={25}
          onClick={() => setDarkMode((prev) => !prev)}
        />
      ) : (
        <BsFillMoonFill
          className="moon"
          size={25}
          onClick={() => setDarkMode((prev) => !prev)}
        />
      )}
    </main>
  );
};

export default Header;
