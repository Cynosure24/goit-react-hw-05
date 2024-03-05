import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry, this page is not found</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
