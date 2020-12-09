const SearchBarButton = ({ isLoading, searchUser }) => (
  <>
    <button
      className="flex-auto text-blue-800 py-2 mx-10 transition duration-500 ease-in-out bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg border-2 border-blue-600 uppercase font-semibold"
      onClick={searchUser}
      disabled={isLoading}
    >
      {isLoading ? "Searching..." : "Search"}
    </button>
  </>
);

export default SearchBarButton;
