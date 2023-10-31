import { db } from "@/lib/db";
import { z } from "zod";

export type Category = {
  id: string;
  name: string;
  image?: string;
};

const categoryCreateSchema = z.object({
  name: z.string(),
  image: z.string().optional(),
});

export async function GET(request: Request) {
  try {
    const categories = await db.category.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return new Response(JSON.stringify(categories));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = categoryCreateSchema.parse(json);

    const post = await db.category.create({
      data: {
        name: body.name,
        image: body.image,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
