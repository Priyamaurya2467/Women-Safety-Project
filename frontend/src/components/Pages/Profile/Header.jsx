import { Search, Bell, Shield } from "lucide-react";
import { ProfileContext } from "../../../Context/ProfileContext";
import { useContext } from "react";
function Header() {
  const {profile} = useContext(ProfileContext)
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-40 flex justify-between items-center px-8">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold text-blue-600">Settings</h2>

        <nav className="hidden md:flex gap-8 ml-8">
          <a
            href="#"
            className="text-blue-600 border-b-2 border-blue-600 font-medium py-5"
          >
            Profile
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors font-medium py-5"
          >
            Security
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors font-medium py-5"
          >
            Emergency Contacts
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 transition-colors font-medium py-5"
          >
            Privacy
          </a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative group">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search settings..."
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-200 outline-none w-64 focus:w-80 transition-all"
          />
        </div>

        {/* Notification */}
        <button className="p-2 text-gray-500 hover:text-blue-600 transition">
          <Bell size={22} />
        </button>

        {/* Security */}
        <button className="p-2 text-gray-500 hover:text-blue-600 transition">
          <Shield size={22} />
        </button>

        <div className="h-8 w-px bg-gray-300"></div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
      src={profile.profileImage}
      alt="profile"
      className="
        w-10
        h-10
        rounded-full
        object-cover
      "
   />
        </div>
      </div>
    </header>
  );
}

export default Header;