import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="text-xl font-bold text-gray-900">News.</h1>
    </Link>
  );
}

export default Logo;
