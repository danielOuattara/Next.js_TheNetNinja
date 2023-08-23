import { useRouter } from "next/router";

const NinjaDetails = () => {
  const router = useRouter();
  console.log("router =", router);
  const ninjaId = router.query.ninjaId;
  return (
    <div>
      <h1>Details page on ninja : {ninjaId}</h1>
    </div>
  );
};

export default NinjaDetails;
