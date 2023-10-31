import { notFound } from "next/navigation";
import { Product } from "@prisma/client";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import CartButton from "@/components/shop/cart-button";

async function getProduct(productId: Product["id"]) {
  return await db.product.findFirst({
    select: {
      name: true,
      description: true,
      image: true,
      price: true,
      category: { select: { name: true } },
    },
    where: {
      id: productId,
    },
  });
}

interface ProductPageProps {
  params: { productId: string };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  return {
    title: product?.name,
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full">
          <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 flex items-center justify-start text-left h-full px-10">
          <div className="flex justify-start flex-col items-start">
            <h2 className="text-xl truncate font-bold uppercase">{product.name}</h2>
            <span className="opacity-50 text-xs font-thin">{product.category.name}</span>

            {/* Size Options */}
            <div className="flex space-x-2 my-8">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size} className={clsx("border text-xs flex items-center justify-center border-gray-400 px-3 py-2 w-8 h-8 opacity-50 border-dashed hover:border-black", size == "M" && "!opacity-100 !border-black !border-solid")}>
                  {size}
                </button>
              ))}
            </div>

            <p className="mb-6 text-xs opacity-60 max-w-md">{product.description}</p>
            <div className="text-xs before:block before:bg-black before:absolute hover:font-semibold transition duration-200 cursor-pointer hover:-translate-x-1 before:w-8 before:h-px before:-translate-x-12 ml-12 before:translate-y-2">view more</div>

            <div className="flex items-center justify-between my-12 space-x-3">
              <Button className="uppercase text-xs"> Add to cart — ${product.price}</Button>
              <Button className="border-black text-black" size={"icon"} variant={"outline"}>
                <HeartIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CartButton />
    </>
  );
}
