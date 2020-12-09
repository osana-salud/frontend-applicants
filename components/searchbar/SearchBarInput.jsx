const SearchBarInput = ({ handleChange, errors }) => (
  <>
    <div className="flex flex-col">
      <input
        type="text"
        className="border-b border-blue-300 py-2 flex-1"
        onChange={handleChange}
      />
      {errors ? (
        <p className="text-red-400 text-center">{errors.name}</p>
      ) : null}
    </div>
  </>
);

export default SearchBarInput;
