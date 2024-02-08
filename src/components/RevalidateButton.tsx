"use client";

import React from "react";

interface Tag {
  tag: string;
}

const RevalidateButton = ({ tag }: Tag) => {
  const handleClick = async () => {
    const res = await fetch("/api/revalidate?tag=" + tag, {
      method: "POST",
    });
    const result = await res.json();
  };

  return (
    <button className="btn" onClick={handleClick}>
      캐시비우기
    </button>
  );
};

export default RevalidateButton;
