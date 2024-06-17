import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 inline-block shadow-2xl transition delay-150 duration-400 ease-in-out scale-100 hover:scale-110  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed hover:bg-yellow-600 uppercase font-semibold px-4 py-3 text-white rounded-2xl  ";

  const style = {
    small: base + "px-3 md:px-2 py-2 md:py-1",
    round: base + "px-2 py-2 md:px-2 md:py-1 text-sm",
    primary:
      "bg-yellow-400 inline-block shadow-2xl  focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed hover:bg-yellow-600 uppercase font-semibold px-4 py-3 text-white rounded-2xl px-4 py-3",
    secondary:
      " border-2 border-gary-800 shadow-2xl transition delay-150 duration-400 ease-in-out scale-100 hover:scale-110  focus:outline-none  disabled:cursor-not-allowed  uppercase font-semibold px-4 py-3 text-gary-600 rounded-2xl px-3 md:px-2 py-2 md:py-1 bg-transparent",
  };
  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}
