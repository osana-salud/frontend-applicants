import Image from "next/image";
import UsernameTitle from "../UsernameTitle";
import CardList from "./CardList";

const Card = ({ username, avatar, name, id, service, profile }) => {
  return (
    <>
      <div className="w-3/4 m-auto rounded-lg shadow-xl bg-white w-64">
        <div className="flex justify-between w-3/5 m-auto">
          <div className="py-8 mr-8">
            <UsernameTitle username={username} />
            {avatar && (
              <Image
                src={avatar || "/osana-logo.png"}
                alt={name}
                height={200}
                width={300}
                layout="intrinsic"
              />
            )}
          </div>
          <CardList
            username={username}
            id={id}
            service={service}
            profile={profile}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
