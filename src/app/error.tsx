"use client";

import React, { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  });

  return (
    <div>
      <h1>에러 페이지</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        홈
      </button>
    </div>
  );
}

// export default error;
