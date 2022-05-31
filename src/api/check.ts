import { CheckFormType } from "../model/CheckForm";

const url = "https://sandbox.uberall.com/api/search";
const publicKey =
  "GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf";

export default async function getCheckup(query: CheckFormType) {
  const { searchData } = await fetch(url, {
    method: "post",
    body: JSON.stringify({ ...query }),
    headers: { publicKey },
  })
    .then((r) => r.json())
    .then((r) => r.response);

  const checkupResponse = await fetch(
    `${url}/${searchData.id}?token=${searchData.token}&directory=FOURSQUARE`,
    { headers: { publicKey } }
  ).then((r) => r.json());

  return checkupResponse;
}
