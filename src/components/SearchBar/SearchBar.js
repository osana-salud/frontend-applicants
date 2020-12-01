import React from "react";
import { setUsers } from "../../state/actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import "./SearchBar.css";

export default function SearchBar() {
  const { register, handleSubmit, errors, clearErrors, reset } = useForm();
  const dispatch = useDispatch();

  const handleSearch = () => {
    let elem = document.getElementById("inputValue");

    let input = elem.value.toLowerCase().replace(/\s+/g, "");

    dispatch(setUsers(input));
    clearErrors("inputvalue");
    reset();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit(handleSearch)}>
        <input
          className="search-input"
          id="inputValue"
          name="inputValue"
          type="text"
          placeholder="Search for any GitHub or GitLab user!"
          ref={register({
            required: "Please type your search",
            minLength: 4,
            validate: (value) =>
              value !== "osana-salud" || "should be greater than 0",
          })}
        />
        {errors.inputValue?.type === "required" && (
          <SearchError message="Please type in your search" />
        )}
        {errors.inputValue?.type === "minLength" && (
          <SearchError message="You need at least 4 characters!" />
        )}
        {errors.inputValue?.type === "validate" && (
          <SearchError message="That search is forbidden :/" />
        )}
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}

const SearchError = (props) => {
  return <div className="search-error"> {props.message}</div>;
};
