import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  /**
   * Kisi bhi chiz ka jab hume reference lena hota hai tab useRef hook kam me ata hai.
   */

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  /**
   * useCallback() function is used for memoization i.e where you run a method or a function without reloading page again. Where the function executed is kept in cached memory.
   */

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*(){}[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-auto mx-auto max-w-md  p-4 my-8 shadow-md rounded-lg bg-gray-800 text-amber-700 ">
        <h1 className="text-center text-3xl ">Password Generator</h1>
        <div className="flex  rounded-lg my-4 mx-2 overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="text-gray-700 bg-amber-50 w-full outline-none  px-3 py-1 rounded-r-0"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-l-0 hover:cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-3 items-center bg-amber-50 p-4 rounded-md">
          <div className="flex text-sm gap-x-2 ">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={15}
                className="cursor-pointer outline-none"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
          </div>
          <div className="flex text-sm gap-x-2 ">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
          </div>
          <div className="flex text-sm gap-x-2 ">
            <input
              type="checkbox"
              onChange={() => {
                setCharactersAllowed((prev) => {
                  return !prev;
                });
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
