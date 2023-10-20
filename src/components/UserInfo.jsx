import { IoLocationSharp } from "react-icons/io5";
import { BsFillBuildingFill, BsLink45Deg, BsTwitter } from "react-icons/bs";

const UserInfo = ({ user }) => {
  const githubDate = user.created_at;

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Date(githubDate).toLocaleDateString(
    undefined,
    options
  );
  return (
    <div className="flex flex-col w-full lg:ml-28 relative">
      {/* top */}
      <div className="flex items-center gap-5">
        <div className="lg:absolute lg:left-[-120px] lg:top-0">
          <img
            src={user.avatar_url}
            alt="image"
            className=" border-2 rounded-[100%] w-[100px] h-auto"
          />
        </div>
        <div className="w-full text-left lg:flex lg:justify-between">
          <div>
          <h2 className="text-2xl">{user.name}</h2>
          <p className="text-blue-700">@{user.login}</p>
          </div>
          <span className="text-gray-400">Joined {formattedDate}</span>
        </div>
      </div>

      <p className="text-gray-400 pt-4 text-left">{user.bio}</p>

      {/* center */}
      <div className="flex justify-between dark:bg-slate-900 bg-[#F5F8FF] rounded-xl py-3 px-5 my-6 w-full">
        <div>
          <span className="text-gray-400">Repos</span>
          <h1 className="text-slate-900 dark:text-white text-left">{user.public_repos}</h1>
        </div>
        <div>
          <span className="text-gray-400">Followers</span>
          <h1 className="text-slate-900 dark:text-white text-left">{user.followers}</h1>
        </div>
        <div>
          <span className="text-gray-400">Following</span>
          <h1 className="text-slate-900 dark:text-white text-left">{user.following}</h1>
        </div>
      </div>

      {/* bottom */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-center gap-3 dark:text-white">
          <IoLocationSharp className="text-xl" />
          <span>
            {(user.location = "null" ? "Not available" : user.location)}
          </span>
        </div>
        <div className="flex items-center gap-3 dark:text-white">
          <BsTwitter className="text-xl" />
          <span>
            {
              (user.twitter_username = "null"
                ? "Not available"
                : user.twitter_username)
            }
          </span>
        </div>
        <div className="flex items-center gap-3 dark:text-white">
          <BsLink45Deg className="text-xl" />
          <a href="#">{user.html_url}</a>
        </div>

        <div className="flex items-center gap-3 dark:text-white">
          <BsFillBuildingFill className="text-xl" />
          <span>@{user.login}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
