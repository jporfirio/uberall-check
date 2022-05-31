import { CheckFormType } from "../model/CheckForm";
import { get, post } from "../utils/api";

export default async function getCheckup(query: CheckFormType) {
  const { searchData } = await post("/search", query).then((r) => r.response);
  return searchData;
}
