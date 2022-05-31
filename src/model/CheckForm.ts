import { z } from "zod";

const schema = z.object({
  name: z.string(),
  country: z.string(),
  street: z.string(),
  zip: z.string(),
});

export type CheckFormType = z.infer<typeof schema>;
export default schema;
