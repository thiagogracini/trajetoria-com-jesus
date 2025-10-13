import Link from "next/link.js";
import { getAllPosts } from "../lib/posts.js";
import { Hero } from "@components/lp-newsletter/hero.js";
import SubscribeForm from "@components/lp-newsletter/form.js";
import { ContainerGrid } from "@components/lp-newsletter/container.js";

function Home() {
  const posts = getAllPosts();
  return (
    <>
      {/* <Hero /> */}
      <ContainerGrid>
        <div className="m-auto text-center max-w-326 laptop:max-w-610 pt-96">
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
          className="m-auto max-w-326 laptop:max-w-577 laptop:w-full"
          formHeadLine={
            <>
              <strong>Receba a carta diária</strong> no seu e-mail
            </>
          }
        />
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
