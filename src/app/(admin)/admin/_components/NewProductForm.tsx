"use client";
import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef, useState } from "react";
import { CircleIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";
import { Category } from "@/types";
const formSchema = z.object({
  name: z
    .string({
      required_error: "Username is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),

  description: z
    .string()
    .min(2, {
      message: "description must be at least 2 characters.",
    })
    .max(160, {
      message: "description must not be longer than 30 characters.",
    }),

  image: z
    .string({ required_error: "image is required." })
    .url({
      message: "Invalid image link!",
    })
    .optional()
    .nullish(),

  price: z.coerce
    .number({
      invalid_type_error: "The price must be a number.",
    })
    .min(0, {
      message: "The price must be at least 0.",
    })
    .max(99999, {
      message: "The price must be at most 99999.",
    })
    .default(0),

  stock: z.coerce
    .number({
      invalid_type_error: "The stock must be a number.",
    })
    .min(0, {
      message: "The stock must be at least 0.",
    })
    .max(99999, {
      message: "The stock must be at most 99999.",
    })
    .default(0),

  // color: z.enum(["black, "white", "red", "green", "blue"]).optional(),

  // categoryId: z.enum(categories.categories.categories.map((category: any) => category.id)),

  isEnabled: z.boolean().default(true),
});

interface Props {
  categories: Category[];
}

export default function NewProductForm({ categories }: Props) {
  const [selectedCategoryId, SetSelectedCategoryId] = useState<string | null>(null);

  const { toast } = useToast();
  const closeModalRef = useRef<HTMLButtonElement | null>(null);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: any) {
    if (!selectedCategoryId) {
      return toast({
        title: "Select a category for the product!",
        variant: "destructive",
      });
    }

    setIsLoading(true);

    const response = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: selectedCategoryId,
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        color: "black",
        isEnabled: data.isEnabled,
        ...(data.image !== null && { image: data.image }),
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "The product was not added. Please try again.",
        variant: "destructive",
      });
    }

    toast({
      title: "Product has been added successfully!",
    });
    closeModalRef.current?.click();

    router.refresh();
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full" variant={"outline"}>
            New Product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogClose ref={closeModalRef}></DialogClose>
            <DialogTitle>New Product</DialogTitle>
            <DialogDescription>Fill the form to add a new prodct.</DialogDescription>
          </DialogHeader>
          <ScrollArea className=" max-h-[calc(100vh-10rem)] px-2">
            <div className=" py-6 mx-2">
              <Label>
                Category <span className="text-destructive"> *</span>
              </Label>
              <Select onValueChange={(value) => SetSelectedCategoryId(value)}>
                <SelectTrigger className="h-9 mt-2 w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    {categories.map((category: any) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="mt-4"></div>
              <AutoForm
                formSchema={formSchema}
                onSubmit={(data) => onSubmit(data)}
                fieldConfig={{
                  image: {
                    inputProps: {
                      placeholder: "https://example.com/image.jpg",
                    },
                    description: "Upload the image and insert the link.",
                  },
                  description: {
                    fieldType: "textarea",
                  },
                  isEnabled: {
                    fieldType: "switch",
                    description: "Do you like to display the product?",
                  },
                }}>
                <AutoFormSubmit disabled={isLoading}>{isLoading && <CircleIcon className="me-2 inline h-4 w-4 animate-spin" />} Add Product</AutoFormSubmit>
              </AutoForm>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
