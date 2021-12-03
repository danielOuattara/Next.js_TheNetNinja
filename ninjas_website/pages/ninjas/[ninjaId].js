// import { useRouter} from "next/router";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(" data = ",  data)
    const paths = data.map( ninja => {
        return {
            params: { ninjaId: ninja.id.toString() }
        };
    })

    console.log("paths =", paths);

    return { 
        paths: paths,
        fallback: false,
    };
}

export const getStaticProps = async (context) => {
    const ninjaId = context.params.ninjaId; 
    console.log( "ninjaId here = ", ninjaId)
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + ninjaId);
    const data = await res.json();
    console.log(data);
    return {
        props: { ninja: data }
    }
};
 
const Ninja = ( { ninja }) => {

    // const router = useRouter();
    // console.log("router =", router);
    // const ninjaId = router.query.ninjaId;
    return (
        <div>
            {/* {console.table(ninja)} */}
            <h2> Name : {ninja.name}</h2>
            <p>Email : {ninja.email}</p>
            <p>Website : {ninja.website}</p>
            <p>City : {ninja.address.city}</p>
        </div>

    );
}

export default Ninja;