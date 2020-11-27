import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchIcon } from "../../../assets/svg/svg";
import { useForm } from "../../../hooks/useForm";
import { users_SearchByName } from "../../../redux/actions/users";
export const SearchForm = () => {
  const [{ query }, handleInputChange, resetForm] = useForm({ query: "" });
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector(({ users }) => users);
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length > 3 && query !== "osana_salud") {
      dispatch(users_SearchByName(query));
    } else {
      setIsInvalid(true);
      resetForm({ query: "" });
    }
  };
  return (
    <div className="form-wrapper">
      <h1>Github & GitLab User's API</h1>
      <form
        onSubmit={handleSearch}
        className={`form ${isInvalid ? "invalid" : ""}`}>
        <label htmlFor="search-user">
          <input
            disabled={loading}
            type="text"
            name="query"
            value={query}
            onChange={(e) => {
              handleInputChange(e);
              if (isInvalid) {
                setIsInvalid(false);
              }
            }}
            placeholder={`${
              isInvalid ? "Please provide a valid name" : "Type a user name"
            }`}
          />
        </label>
        <button disabled={loading}>{searchIcon}</button>
      </form>
    </div>
  );
};
