import {
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import getCheckup from "../api/check";
import Directory from "../components/Directory";
import { countriesByDirectory } from "../constants";
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
      <h1>Results</h1>
      <Link to={`/${search}`}>Home</Link>
      <table>
        <thead>
          <tr>
            <td>Directory</td>
            <td>Info</td>
            <td>Hours</td>
            <td>Photos</td>
          </tr>
        </thead>

        <tbody>
          {countriesByDirectory[data.country].map((key) => (
            <Directory
              platform={key}
              key={key}
              id={data.id}
              token={data.token}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
