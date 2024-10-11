import { z } from "zod";
const menuSchema = z.object({
  canteen: z.string().min(2).max(20),
  title: z.string().min(1).max(20),
  description: z.string().min(1).max(20),
  image: z.string(),
  price: z.number(),
});
export default menuSchema;