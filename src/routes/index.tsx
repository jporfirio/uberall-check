import { DataBrowserRouter, Route } from "react-router-dom";
import Result, { loader } from "./Result";
import Home from "./Home";

export default function Router() {
  return (
    <DataBrowserRouter fallbackElement={<>{null}</>}>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} loader={loader} />
    </DataBrowserRouter>
  );
}
