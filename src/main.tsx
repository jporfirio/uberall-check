import React from "react";
import ReactDOM from "react-dom/client";
import {
  DataBrowserRouter,
  Link,
  Route,
  useLoaderData,
} from "react-router-dom";
import "./main.less";

function HomeRoute() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="result">Result</Link>
    </div>
  );
}

function ResultRoute() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Result: {data}</h1>
      <Link to=".">Home</Link>
    </div>
  );
}

async function resultLoader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "Done, bro";
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataBrowserRouter fallbackElement={<>{null}</>}>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/result" element={<ResultRoute />} loader={resultLoader} />
    </DataBrowserRouter>
  </React.StrictMode>
);
