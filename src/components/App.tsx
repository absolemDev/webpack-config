import { useState } from "react";
import style from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import jpgImage from "@/assets/avatar.jpg";
import pngImage from "@/assets/avatar.png";
import Calendar from "@/assets/calendar.svg";

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div data-testid="App">
      <h1 data-testid="title">PLATFORM = {__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={jpgImage} alt="" />
        <img width={100} height={100} src={pngImage} alt="" />
      </div>
      <div>
        <Calendar width={50} height={50} />
      </div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <div>Counter: {counter}</div>
      <button className={style.button} onClick={() => setCounter(counter + 1)}>
        Inc
      </button>
      <Outlet />
    </div>
  );
};
