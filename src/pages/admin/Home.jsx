import { useParams } from "react-router-dom";

function Home() {
  const { userid } = useParams();
  return <div>Home</div>;
}

export default Home;
