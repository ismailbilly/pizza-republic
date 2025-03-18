import { Categories, items } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import Header from "@/components/shared/header";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header className="sticky top-0 z-50 bg-white" />
      <Container className="mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
        <Categories items={items}/>
      </Container>
    </>
  );
}
