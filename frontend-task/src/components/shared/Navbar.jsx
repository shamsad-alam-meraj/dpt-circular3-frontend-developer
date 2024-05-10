import notificationIcon from "../../assets/images/icons/notification.png";
import avatarIcon from "../../assets/images/icons/avatar.png";

export default function Navbar() {
  return (
    <div className="w-full h-[60px] bg-slate-800 sticky flex items-center justify-between px-[10%]">
      <div className="flex">
        <p className="text-white font-semibold cursor-pointer mr-5 hover:text-black hover:bg-white hover:rounded p-1">Dashboard</p>
        <p className="text-white font-bold cursor-pointer mr-5 hover:text-black hover:bg-white hover:rounded p-1">Master Price</p>
        <p className="text-white font-semibold cursor-pointer mr-5 hover:text-black hover:bg-white hover:rounded p-1">Customer Price</p>
        <p className="text-white font-semibold cursor-pointer mr-5 hover:text-black hover:bg-white hover:rounded p-1">Calendar</p>
        <p className="text-white font-semibold cursor-pointer mr-5 hover:text-black hover:bg-white hover:rounded p-1">Reports</p>
      </div>

      <div className="flex">
        {/* notification icon  */}
        <img className="w-6 h-6 mr-4" src={notificationIcon} alt="notification" />
        {/* profile picture icon  */}
        <img className="w-6 h-6" src={avatarIcon} alt="avatar" />
      </div>
    </div>
  );
}
