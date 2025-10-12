import { ContainerGrid } from "@components/lp-newsletter/container";
import { Hero } from "@components/lp-newsletter/hero.js";
import SubscribeForm from "@components/lp-newsletter/form";
import { getAllPosts } from "@lib/posts.js";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

async function fetchCartas(carta) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === carta);
}

export default async function Carta({ params }) {
  const carta = await fetchCartas(params.carta);

  if (!carta) notFound();

  const htmlConverter = md.render(carta.content);

  return (
    <>
      <Hero />
      <section className="pt-96 bg-[#FFFEFB]">
        <ContainerGrid>
          <article>
            <h1>{carta.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
          </article>
          <SubscribeForm />
        </ContainerGrid>
      </section>
    </>
  );
}
