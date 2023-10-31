import { db } from "@/lib/db";
import { z } from "zod";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
  price: number;
  color: string;
  stock: number;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const productCreateSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().optional(),
  categoryId: z.string(),
  price: z.number(),
  color: z.string(),
  stock: z.number(),
  isEnabled: z.boolean(),
});

export async function GET(request: Request) {
  try {
    const products = await db.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        categoryId: true,
        category: true,
        price: true,
        color: true,
        stock: true,
        isEnabled: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        isEnabled: true,
      },
    });

    return new Response(JSON.stringify(products));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = productCreateSchema.parse(json);

    const post = await db.product.create({
      data: {
        name: body.name,
        description: body.description,
        image: body.image,
        categoryId: body.categoryId,
        price: body.price,
        color: body.color,
        stock: body.stock,
        isEnabled: body.isEnabled,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
