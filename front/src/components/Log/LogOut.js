import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const LogOut = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logOut = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <div>
      <ul>
        <li onClick={logOut}>
          <img src="./img/icons/logout.svg" alt="logout" />
        </li>
      </ul>
    </div>
  );
};

export default LogOut;
