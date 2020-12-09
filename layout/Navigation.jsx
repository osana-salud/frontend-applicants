import Link from "next/link";

const Navigation = () => (
  <div className="text-white mr-12">
    <ul>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
