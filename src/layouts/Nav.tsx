import Link from "next/link";
import React from "react";
import style from "../app/style.module.css";

const Nav = () => {
  return (
    <>
      <ul className={style.list}>
        <li>
          <Link href="/detail/seoul">서울</Link>
        </li>
        <li>
          <Link href="/detail/london">런던</Link>
        </li>
        <li>
          <Link href="/detail/newyork">뉴욕</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
