export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { ninjaId: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //   console.log("context = ", context);
  const ninjaId = context.params.ninjaId;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + ninjaId,
  );
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const NinjaDetails = ({ ninja }) => {
  return (
    <div>
      <h2> Name : {ninja.name}</h2>
      <p>Email : {ninja.email}</p>
      <p>Website : {ninja.website}</p>
      <p>City : {ninja.address.city}</p>
    </div>
  );
};

export default NinjaDetails;
