import { useState } from "react";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
    const [cnt, setCnt] = useState(0);
    return <>
        {/* <NavBar /> */}
        <Component {...pageProps} />
        {/* <button onClick={() => setCnt((prev) => prev + 1)}>클릭</button>
        <div>{cnt}</div> */}
    </>
}