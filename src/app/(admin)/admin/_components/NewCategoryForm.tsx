"use client";
import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleIcon } from "@radix-ui/react-icons";
import { DialogClose } from "@radix-ui/react-dialog";

const formSchema = z.object({
  name: z
    .string({
      required_error: "name is required.",
    })
    .min(2, {
      message: "name must be at least 2 characters.",
    }),
  image: z
    .string({ required_error: "image is required." })
    .url({
      message: "Invalid image link!",
    })
    .optional()
    .nullish(),
});

const NewCategoryForm = () => {
  const { toast } = useToast();
  const closeModalRef = useRef<HTMLButtonElement | null>(null);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: any) {
    setIsLoading(true);

    const response = await fetch("/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        ...(data.image !== null && { image: data.image }),
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "The category was not created. Please try again.",
        variant: "destructive",
      });
    }

    toast({
      title: "Category has been added successfully!",
    });
    closeModalRef.current?.click();

    const category = await response.json();

    router.refresh();
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full">
          <Button className="w-full" variant={"outline"}>
            New Category
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogClose ref={closeModalRef}></DialogClose>
            <DialogTitle>New Category</DialogTitle>
            <DialogDescription>Fill the form to add a new category.</DialogDescription>
          </DialogHeader>
          <ScrollArea className=" max-h-[calc(100vh-10rem)] px-2">
            <div className=" py-6 mx-2">
              <AutoForm
                formSchema={formSchema}
                onSubmit={(data) => onSubmit(data)}
                fieldConfig={{
                  image: {
                    description: "Upload the image and insert the link.",
                  },
                }}>
                <AutoFormSubmit disabled={isLoading}>{isLoading && <CircleIcon className="me-2 inline h-4 w-4 animate-spin" />} Add Category</AutoFormSubmit>
              </AutoForm>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewCategoryForm;
