import { ContainerGrid } from "@components/lp-newsletter/container";
import SubscribeForm from "@components/lp-newsletter/form";

export function Hero() {
  return (
    <section className="laptop:h-screen h-full bg-[#fff7d2] pb-88 pt-88">
      <ContainerGrid className="text-center">
        <h2 className="text-[38px]">A Newsletter</h2>
        <h1 className="font-redhatdisplay text-[51px] font-bold">
          Trajetória com Jesus
        </h1>
        <p className="font-alegreya text-[37px] pb-48">
          É muito mais do que um devocional diário, é{" "}
          <strong>um guia para a vida espiritual, pessoal</strong> e{" "}
          <strong>profissional</strong>
        </p>
        <p className="text-[37px] mb-24">
          <strong>Inscreva-se</strong> gratuitamente
        </p>
        <SubscribeForm />
      </ContainerGrid>
    </section>
  );
}
