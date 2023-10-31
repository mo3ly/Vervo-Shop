import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import NewCategoryForm from "./_components/NewCategoryForm";
import NewProductForm from "./_components/NewProductForm";
import { db } from "@/lib/db";
import ProductTable from "./_components/ProductTable";
import CategoriesModal from "./_components/CategoriesModal";

// export const revalidate = 1;
export const dynamic = "force-dynamic";

async function getCategories() {
  return await db.category.findMany({
    select: { id: true, name: true, image: true },
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function getProducts() {
  return await db.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      category: { select: { name: true } },
      price: true,
      stock: true,
      isEnabled: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

// TODO:
// - Delete & Edit, Products & Categories.

export default async function Admin() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <Card className="container bg-transparent border-none shadow-none bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Products
          <div className="flex items-center justify-between space-x-2">
            <CategoriesModal categories={categories} />
            <Popover>
              <PopoverTrigger>
                <Button>+ Add </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="p-0 w-56 border-0">
                <NewProductForm categories={categories} />
                <NewCategoryForm />
              </PopoverContent>
            </Popover>
          </div>
        </CardTitle>
        <CardDescription>Explore and manage all the avaliable products.</CardDescription>
      </CardHeader>

      <CardContent>
        <ProductTable products={products} />
      </CardContent>
    </Card>
  );
}
