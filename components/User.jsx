import Image from "next/image";
import Link from "next/link";
import UsernameTitle from "./UsernameTitle";
function User({ username, avatar, name, id, service }) {
  return (
    <li className="shadow-lg p-8">
      <div className="flex flex-col">
        <UsernameTitle username={username} />
        {avatar && (
          <Image
            src={avatar || "/osana-logo.png"}
            alt={name}
            height={400}
            width={600}
            layout="intrinsic"
          />
        )}
        <p className="font-semibold my-6">User id: {id}</p>
        <Link href={`users/${service}/${id}/profile`}>
          <a className="py-4 px-8 text-center text-white transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Visit profile
          </a>
        </Link>
      </div>
    </li>
  );
}

export default User;
