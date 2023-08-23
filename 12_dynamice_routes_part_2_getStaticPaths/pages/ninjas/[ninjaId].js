import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log("data =", data)

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  console.log("paths =", paths);

  return {
    paths,
    fallback: false,
  };
};

const NinjaDetails = () => {
  const router = useRouter();
  console.log("router =", router);
  const ninjaId = router.query.ninjaId;
  return (
    <div>
      <h1>Details on ninja : {ninjaId}</h1>
    </div>
  );
};

export default NinjaDetails;
