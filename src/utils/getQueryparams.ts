export default function getQueryParams(url: string | URL): {
  [key: string]: string | number;
} {
  const { searchParams } = new URL(url);
  const entries = Array.from(searchParams.entries());

  return entries.reduce((query: { [key: string]: any }, [key, value]) => {
    query[key] = value;
    return query;
  }, {});
}
