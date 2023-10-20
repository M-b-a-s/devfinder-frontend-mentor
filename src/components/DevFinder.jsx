import { useState } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import Card from "./Card";
import UserInfo from "./UserInfo";
import { API_URL } from "../constants";

const DevFinder = () => {
  const [user, setUser] = useState();

  // get user
  const getUserData = async (username) => {
    try {
      const res = await fetch(`${API_URL}/${username}`, {
        headers: new Headers({ "X-GitHub-Api-Version": "2022-11-28" }),
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        console.log(data);
      } else {
        if (res.status === 404) {
          setUser({ notFound: true });
        }
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="bg-[#F5F8FF] dark:bg-slate-900 w-full h-screen flex items-center">
      <div className="lg:w-[700px] mx-auto text-center px-3">
        <Header />
        <SearchBar onSearch={getUserData} />
        {user && (
          <Card>
            {user.notFound ? (
              <div className="flex bg-[#922010] text-white text-2xl mt-4 rounded-xl p-8 gap-10">
                User not found!!!
              </div>
            ) : (
              <div className="flex bg-white dark:bg-[#475571] dark:text-white mt-4 rounded-xl p-8 gap-10">
                <UserInfo user={user} />
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default DevFinder;
