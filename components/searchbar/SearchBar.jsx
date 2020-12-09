import SearchBarInput from "./SearchBarInput";
import SearchBarLabel from "./SearchBarLabel";
import SearchBarButton from "./SearchBarButton";

const SearchBar = ({ errors, isLoading, handleChange, searchUser }) => {
  return (
    <>
      <div className="flex items-center justify-around w-3/4 m-auto ">
        <SearchBarLabel />
        <SearchBarInput handleChange={handleChange} errors={errors} />
        <SearchBarButton searchUser={searchUser} isLoading={isLoading} />
      </div>
    </>
  );
};

export default SearchBar;
