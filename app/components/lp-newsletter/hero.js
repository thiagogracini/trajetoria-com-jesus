import { ContainerGrid } from "@components/lp-newsletter/container";
import SubscribeForm from "@components/lp-newsletter/form";

export function Hero() {
  return (
    <section className="bg-[#F6EDDC] pb-88 pt-88">
      <ContainerGrid className="laptop:flex laptop:justify-between laptop:items-center">
        <div className="m-auto max-w-601 laptop:text-left text-center mb-48">
          <h2 className="text-[38px] tracking-[16px]">CARTAS</h2>
          <h1 className="font-redhatdisplay text-[64px] font-bold">
            Ao Cristão
          </h1>
          <p className="font-alegreya text-[32px] pb-24 mr-15">
            Muito mais do que um <strong>devocional diário</strong>
          </p>
          <p className="font-alegreya text-[32px] mr-15">
            <strong>Um guia para a vida</strong> espiritual, pessoal e{" "}
            profissional
          </p>
        </div>
        <SubscribeForm className="m-auto w-full" />
      </ContainerGrid>
      <div className="text-center pt-48 text-[32px]">
        <p className="mb-24">
          <strong>5 Minutos</strong> com Deus diariamente
        </p>
        <p>
          <strong>365 Dias</strong> com Deus
        </p>
      </div>
    </section>
  );
}
