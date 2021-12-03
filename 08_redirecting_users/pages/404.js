
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter();
    console.log('router =', router);

    useEffect( () => {
        console.log("useEffect Run !");
        setTimeout(() => {
            // router.go(-1)
            router.push("/")

        },3000)

    }, []);


    return ( 
        <div className="not-found">
            <h2>Sorry ... :(</h2> 
            <p>The page your are looking for is not found</p>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            <p>You will be redirected in 3 secondes to Homepage</p>
        </div>
     );
}
 
export default NotFound; 