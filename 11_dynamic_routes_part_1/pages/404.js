import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const NotFound = () => {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    console.log("useEffect Run !");
    console.log();
    setTimeout(() => {
      // router.go(1)
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
};

export default NotFound;
