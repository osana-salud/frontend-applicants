const CardList = ({ username, id, service, profile }) => (
  <>
    <ul className="py-8 flex flex-col justify-between">
      <li>id: {id}</li>
      <li>user: {username} </li>
      <li>service: {service}</li>
      <li>
        <a href={profile} target="_blank" rel="noopener noreferrer">
          visit the {username} profile
        </a>
      </li>
    </ul>
  </>
);

export default CardList;
