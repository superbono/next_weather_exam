"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomeButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <button className="btn" onClick={handleClick}>
        홈
      </button>
    </>
  );
};

export default HomeButton;
