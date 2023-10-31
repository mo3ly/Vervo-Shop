"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Share1Icon, ZoomInIcon } from "@radix-ui/react-icons";
import { Product } from "@/types";

interface Props {
  products: Product[];
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const ProductGrid: React.FC<Props> = ({ products }) => {
  // refactor this dirty shit later
  if (products == undefined)
    return (
      <>
        <div>No products</div>
      </>
    );

  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" initial="hidden" animate="visible" variants={containerVariants}>
      {products.map((product, index) => (
        <motion.div key={product.id} variants={itemVariants} className={`group flex flex-col items-center hover:cursor-pointer transition duration-300 ${index % 3 === 1 ? "bg-gray-50" : "bg-white"}`}>
          <Link href={"/shop/" + product.id} className="relative w-full h-96 overflow-hidden">
            <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-20"></div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300"></div>

            {/* Buttons on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="flex space-x-4">
                <button className="bg-white text-black px-3 w-10 h-10 py-1">
                  <ZoomInIcon />
                </button>
                <button className="bg-white text-black px-3 w-10 h-10 py-1">
                  <Share1Icon />
                </button>
              </div>
            </div>
          </Link>

          <div className="/bg-white px-5 w-full h-24 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">{product.name}</div>
              <p className="text-gray-500 font-light text-sm">{product.category.name}</p>
            </div>
            <div className="text-sm border-b-2 border-black py-2 w-12 text-center font-bold"> ${product.price} </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
