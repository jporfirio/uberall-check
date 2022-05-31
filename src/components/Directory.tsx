import { useEffect, useState } from "react";
import getDirectory from "../api/directory";
import { directoryLogosByName } from "../constants";

interface DirectoryProps {
  platform: string;
  id: string;
  token: string;
}
type Status = "NOT_APPLICABLE" | "MISSING" | "PRESENT";
interface CheckResult {
  photosStatus?: Status;
  openingHoursStatus?: Status;
  name?: string;
  address?: string;
  phone?: string;
  website?: string;
  streetAndNo?: string;
  city?: string;
}
export default function Directory({ platform, id, token }: DirectoryProps) {
  const [result, setResult] = useState<CheckResult>({});

  useEffect(() => {
    getDirectory(id, token, platform).then((r) => setResult(r.response.result));
  }, [platform, id, token]);

  return (
    <tr>
      <td>
        <img src={directoryLogosByName[platform]} alt={platform} />
      </td>
      <td>
        <p>{result?.name}</p>
        <p>
          {result?.streetAndNo} - {result?.city}
        </p>
        <p>{result?.phone}</p>
        <p>{result?.website}</p>
      </td>
      <td>
        {result?.openingHoursStatus === "PRESENT" ? (
          <>&#10003;</>
        ) : (
          <>&#10006;</>
        )}
      </td>
      <td>
        {result?.photosStatus === "PRESENT" ? <>&#10003;</> : <>&#10006;</>}
      </td>
    </tr>
  );
}
