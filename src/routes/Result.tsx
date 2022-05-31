import {
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import getCheckup from "../api/check";
import CheckForm from "../model/CheckForm";
import getQueryParams from "../utils/getQueryparams";

export const loader: LoaderFunction = async ({ request }) => {
  const query = getQueryParams(request.url);

  const parsed = CheckForm.parse(query);
  const response = await getCheckup(parsed);

  return json(response);
};

export default function Result() {
  const data = useLoaderData();
  const { search } = useLocation();

  return (
    <div>
      <h1>Result</h1>
      <Link to={`/${search}`}>Home</Link>

      <code>{JSON.stringify(data)}</code>
    </div>
  );
}
