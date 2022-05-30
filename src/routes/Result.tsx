import {
  json,
  Link,
  LoaderFunction,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { z } from "zod";

function getQueryParams(url: string | URL): { [key: string]: string | number } {
  const { searchParams } = new URL(url);
  const entries = Array.from(searchParams.entries());

  return entries.reduce((query: { [key: string]: any }, [key, value]) => {
    query[key] = value;
    return query;
  }, {});
}

const schema = z.object({
  company: z.string(),
  country: z.string(),
  street: z.string(),
  zipcode: z.string(),
});

export const loader: LoaderFunction = async ({ request }) => {
  const query = getQueryParams(request.url);

  schema.parse(query);

  return json(query);
};

export default function Result() {
  const data = useLoaderData();
  const { search } = useLocation();

  return (
    <div>
      <h1>Result: {JSON.stringify(data)}</h1>
      <Link to={`/${search}`}>Home</Link>
    </div>
  );
}
