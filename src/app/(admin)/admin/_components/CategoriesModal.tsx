"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Category } from "@/types";
import { Component1Icon, DashboardIcon } from "@radix-ui/react-icons";

interface Props {
  categories: Category[];
}

export default function CategoriesModal({ categories }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <DashboardIcon className="mr-2" /> Categories
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Categories</DialogTitle>
          <DialogDescription>Discover the avaliable categories.</DialogDescription>
        </DialogHeader>

        <ScrollArea className=" max-h-[calc(100vh-10rem)] px-2">
          <Table>
            <TableCaption>A list of your recent categories.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="w-[100px]">Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories != undefined && categories != null
                ? categories?.map((category: any) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">{category.name}</TableCell>
                      <TableCell>{category.image}</TableCell>
                    </TableRow>
                  ))
                : "Loading.."}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
