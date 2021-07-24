import { useRouter} from "next/router";

const Ninja = () => {

    const router = useRouter();
    console.log("router =", router);
    const ninjaId = router.query.ninjaId;
    return (
        <div>
            <h1>Details on ninja : {ninjaId}</h1>
        </div>

    );
}

export default Ninja;