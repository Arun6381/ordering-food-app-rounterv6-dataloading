import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  console.log(error);
  return (
    <div className="text-center py-5">
      <h1 className="mb-5">Something went wrong 😢</h1>
      <p className="mb-5">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
