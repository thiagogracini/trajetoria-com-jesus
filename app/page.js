import Link from "next/link.js";
import { getAllPosts } from "../lib/posts.js";
import { Hero } from "@components/lp-newsletter/hero.js";
import SubscribeForm from "@components/lp-newsletter/form.js";
import { ContainerGrid } from "@components/lp-newsletter/container.js";

function Home() {
  const posts = getAllPosts();
  posts.sort((a, b) => a.letter - b.letter);

  return (
    <>
      {/* <Hero /> */}
      <ContainerGrid>
        <div className="m-auto text-center max-w-326 tablet:max-w-610 pt-96">
          <h2 className="text-[24px] font-light tracking-[16px]">CARTAS</h2>
          <h1 className="font-redhatdisplay text-[48px] font-bold">
            Ao Cristão
          </h1>
          <p className="font-alegreya text-[20px] laptop:text-[24px] pb-24">
            Muito mais do que um <strong>devocional diário</strong>
          </p>
          <p className="font-alegreya text-[20px] laptop:text-[24px] pb-24">
            <strong>Um guia para a vida</strong> espiritual, pessoal e{" "}
            profissional
          </p>
        </div>
        <SubscribeForm
          className="m-auto max-w-326 tablet:max-w-577 tablet:w-full"
          formHeadLine={
            <>
              <strong>Receba a carta diária</strong> no seu e-mail
            </>
          }
        />

        <section className="border border-[#3f352241] rounded-[1.25rem] bg-white m-auto mt-96 mb-48 max-w-577 p-24">
          <h2 className="text-center font-redhatdisplay text-[40px] font-bold">
            Cartas Enviada
          </h2>
          {posts.map((post) => (
            <div key={post.letter}>
              <Link
                className="w-full pt-16 pb-16 border-b flex justify-between"
                href={`/cartas/${post.slug}`}
              >
                <h3 className="font-bold mr-15">{post.title}</h3>
                <p className="w-full max-w-90">{post.date}</p>
              </Link>
            </div>
          ))}
        </section>
      </ContainerGrid>

      {/* <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default Home;
