import {Routing} from "./libs/Routing";
import {TrainLoader} from "@/components/index.js";
import {useState} from "react";

function App() {
    const [loaded, setLoaded] = useState(false);
    if (!loaded) {
        return <TrainLoader onFinish={() => setLoaded(true)}/>;
    }
    return <Routing/>;
}
export default App;
