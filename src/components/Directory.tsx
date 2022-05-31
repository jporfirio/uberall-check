import { useEffect, useState } from "react";
import getDirectory from "../api/directory";

interface DirectoryProps {
  platform: string;
  id: string;
  token: string;
}
export default function Directory({ platform, id, token }: DirectoryProps) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    getDirectory(id, token, platform).then(setResult);
  }, [platform, id, token]);

  return <div>{JSON.stringify(result)}</div>;
}
