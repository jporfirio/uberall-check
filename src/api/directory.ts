import { get } from "../utils/api";

export default function getDirectory(
  id: string,
  token: string,
  directory: string
) {
  return get(`/search/${id}?token=${token}&directory=${directory}`);
}
