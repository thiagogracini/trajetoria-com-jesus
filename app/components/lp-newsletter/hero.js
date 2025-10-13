"use client";
import { ContainerGrid } from "@components/lp-newsletter/container";
import SubscribeForm from "@components/lp-newsletter/form";
import { usePathname } from "next/navigation";

export function Hero() {
  const pathName = usePathname();
  const isRoot = pathName === "/";

  return (
    <section className="bg-[#F6EDDC] pb-48 pt-48">
      <ContainerGrid className="laptop:flex laptop:justify-between laptop:items-center">
        <div className="m-auto laptop:m-0 text-center laptop:text-left max-w-326 laptop:max-w-610">
          <h2 className="text-[24px] font-light tracking-[16px]">CARTAS</h2>
          {isRoot ? (
            <h1 className="font-redhatdisplay text-[48px] font-bold">
              Ao Cristão
            </h1>
          ) : (
            <h2 className="font-redhatdisplay text-[48px] font-bold">
              Ao Cristão
            </h2>
          )}
          <p className="font-alegreya text-[20px] laptop:text-[24px] pb-24">
            Muito mais do que um <strong>devocional diário</strong>
          </p>
          <p className="font-alegreya text-[20px] laptop:text-[24px] pb-24">
            <strong>Um guia para a vida</strong> espiritual, pessoal e{" "}
            profissional
          </p>
        </div>
        <SubscribeForm
          className="m-auto laptop:m-0 max-w-326 laptop:max-w-577 laptop:w-full"
          formHeadLine={
            <>
              <strong>Receba a carta diária</strong> no seu e-mail
            </>
          }
        />
      </ContainerGrid>
      <div className="text-center pt-24 text-[20px] laptop:text-[24px]">
        <p className="mb-16">
          <strong>5 Minutos</strong> com Deus diariamente
        </p>
        <p>
          <strong>365 Dias</strong> com Deus
        </p>
      </div>
    </section>
  );
}
