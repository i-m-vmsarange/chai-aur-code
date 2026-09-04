import React from "react";

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return <div className="font-bold text-center p-4 text-4xl">App</div>;
};

export default App;
