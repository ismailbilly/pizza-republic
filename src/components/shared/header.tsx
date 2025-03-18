import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
interface IHeaderProps {
  className: string;
}

export default function Header(props: IHeaderProps) {
  const { className } = props;
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" width={35} height={35} alt="Logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">Pizza Republic</h1>
              <p className="text-sm text-gray-400 leading-3">
                Unique taste everyday
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Login
          </Button>

          <div className="flex items-center gap-4 justify-center bg-primary text-white rounded-full px-4 py-2">
            <Button className="group relative">
              <b>$100</b>
              <span className="h-full w-0.5 bg-accent mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-20">
                <ShoppingCart size={16} className="relativee" />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group:hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
