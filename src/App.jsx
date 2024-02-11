import { useEffect, useState } from "react";
import { Routing } from "./libs/Routing";
import { TrainLoader } from "./components";

function App() {
  const [sideLoader, setSideLoader] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setSideLoader(false);
    }, 1200);

    return () => clearInterval(time);
  }, []);

  return (
    <>
      {!sideLoader ? (
        <>
          <Routing />
        </>
      ) : (
        <TrainLoader />
      )}
    </>
  );
}

export default App;
