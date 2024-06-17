import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  function handleClearinp() {
    setQuery("");
  }
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className=" rounded-2xl bg-white w-[200px] flex justify-end text-center "
      >
        <input
          placeholder="Search Order"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-2xl pl-5 outline-none"
        />
        {query ? (
          <span className=" " onClick={handleClearinp}>
            &times;
          </span>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
