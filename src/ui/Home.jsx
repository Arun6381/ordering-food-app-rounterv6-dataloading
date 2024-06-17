import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className=" text-center my-10">
      <h1 className=" text-xl font-semibold m-2 mb-5">
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          You already filled Mr/Ms.{username}
        </Button>
      )}
    </div>
  );
}

export default Home;
