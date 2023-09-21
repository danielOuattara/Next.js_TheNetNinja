import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <Head>
        <title> Ninja List | Not Found </title>
        <meta name="keywords" content="ninjas site and list" />
      </Head>
      <h2>Sorry ... :(</h2>
      <p>The page your are looking for is not found</p>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
      <p>You will be redirected in 3 secondes to Homepage</p>
    </div>
  );
}
