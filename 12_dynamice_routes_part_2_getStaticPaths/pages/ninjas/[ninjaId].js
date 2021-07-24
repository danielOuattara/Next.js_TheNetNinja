import { useRouter} from "next/router";


// NOTE: Below is commented until next video tutorial
// ---------------------------------------------------

// export const getStaticPaths = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     const paths = data.map(ninja => {
//         return {
//             params: { id: ninja.id.toString()}
//         };
//     })

//     console.log("paths =", paths)

//     return { 
//         paths: paths,
//         fallback: false,
//     };
// }


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