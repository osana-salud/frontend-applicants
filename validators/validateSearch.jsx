export default function validateSearch(value) {
  let errors = {};

  if (value.trim() === "") {
    errors.name = "The field can't empty.";
  } else if (value === "osana-salud") {
    errors.name = "You can't search for Osana Salud. Try another username";
  } else if (value.length < 4) {
    errors.name = "Make sure the field has 4 or more characters";
  }

  return errors;
}
