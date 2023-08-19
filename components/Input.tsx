"use client";

import { useState } from "react";
import Header from "./Header";
import Information from "./Information";

export function Input() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <>
      <input
        type="text"
        name="teste"
        id="teste"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
    </>
  );
}
