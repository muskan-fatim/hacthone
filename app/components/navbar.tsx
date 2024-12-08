import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 bg-white shadow">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">MORENT</div>

      {/* Search Bar */}
      <div className="relative flex items-center w-full mt-4 sm:mt-0 sm:max-w-md">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full px-4 py-2 pl-10 text-sm text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-3">
          <Image
            src="/search-icon.png" // Replace with the correct path
            alt="Search"
            width={20}
            height={20}
          />
        </div>
        <div className="absolute right-3">
          <Image
            src="/filter.png" // Replace with the correct path
            alt="Filter"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Right-hand Side Icons */}
      <div className="flex flex-wrap items-center justify-end w-full mt-4 space-x-4 sm:mt-0 sm:w-auto sm:space-x-6">
        {/* Heart Icon */}
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <Image
            src="/heart.png"
            alt="Heart"
            width={24}
            height={24}
          />
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <Image
            src="/notification-icon.png"
            alt="Notification"
            width={24}
            height={24}
          />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings Icon */}
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
          <Image
            src="/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
          />
        </button>

        {/* Profile Image */}
        <div className="w-10 h-10 overflow-hidden border border-gray-300 rounded-full">
          <Image
            src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SewF4HShGoHobjF4XQXMpGI4FxLYPtIYcpM09w0vRGgEf3ZSd1L0VOZNDaewTbvVqTLfW19SoLc5R0GPN~wbSTgmezXL8iN5OPGFN4tViX~mivCa-xFm9TqnmXZBNDgDsm246HGTTO1rmxUY~lXxiDNwS0EUdR-JK5i~Bify4zMZTuL9HjWbvJ9IQHTbU55XSJOkoLfymf2TZweae0lkdmUJPmRrCWM8VcgpjRLUkTQ8940cPyMEaV9G44BGgpym~KI5UWgxYat-Luq8KD~R48XOFFAhLk2p~SMOO3qoHQXF5vMKEA4MxLtIHktXWOclbId4KVmX5JMzz7ERf1EhJg__"
            alt="User Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
