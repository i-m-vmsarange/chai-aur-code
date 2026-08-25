import { Profile, Login } from "./components";

const App = () => {
  return (
    <div className="text-center p-8 h-screen w-screen">
      <h1 className="p-2">React with chai sharing is important</h1>
      <Login />
      <Profile />
    </div>
  );
};

export default App;
