import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry ... :(</h2>
      <p>The page your are looking for is not found</p>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
