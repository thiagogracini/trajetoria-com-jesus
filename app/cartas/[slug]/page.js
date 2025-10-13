import { ContainerGrid } from "@components/lp-newsletter/container";
import { Hero } from "@components/lp-newsletter/hero.js";
import SubscribeForm from "@components/lp-newsletter/form";
import { getAllPosts } from "@lib/posts.js";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import Footer from "@components/lp-newsletter/footer";

const md = new MarkdownIt();

async function fetchCartas(requestedPost) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === requestedPost);
}

export default async function Post({ params }) {
  const { slug } = await params;
  const carta = await fetchCartas(slug);

  if (!carta) notFound();

  const htmlConverter = md.render(carta.content);

  return (
    <>
      <Hero />
      <section className="pt-48 bg-[#FFFEFB] pb-48">
        <ContainerGrid className="laptop:flex laptop:justify-between">
          <article className="m-auto laptop:m-0 mb-56 laptop:pr-15">
            <h1>{carta.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
          </article>
          <div>
            <SubscribeForm
              className="m-auto max-w-326"
              formHeadLine={
                <>
                  <strong>Receba a carta diária</strong>
                </>
              }
            />
          </div>
        </ContainerGrid>
      </section>
      <Footer />
    </>
  );
}
