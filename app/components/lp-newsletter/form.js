"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const validate = () => {
    const formErrors = {};
    if (!firstName.trim()) formErrors.firstName = "Informe seu primeiro nome.";
    if (!email.trim()) {
      formErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "E-mail inválido.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    if (!validate()) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/v1/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      // await new Promise((r) => setTimeout(r, 600));
      setMessage("Inscrição enviada com sucesso!");
      setFirstName("");
      setEmail("");
      setErrors({});
    } catch (error) {
      setMessage("Falha ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <p className="text-[37px] text-center">
        <strong>Inscreva-se</strong> gratuitamente
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-620 text-bold font-redhatdisplay text-[25px]"
      >
        <div>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            placeholder="Digite seu nome..."
            onChange={(event) => setFirstName(event.target.value)}
            required
            className="w-full rounded border-2 px-10 bg-white h-70 border-[#ffe46e] mb-10"
            autoComplete="off"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-red-600">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="off"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded border-2 px-10 bg-white h-70 border-[#ffe46e] mb-10"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded bg-[#ffe46e] pt-10 pb-10 text-[#1e1c16] disabled:opacity-50 text-[30px] font-redhatdisplay font-bold mb-10"
        >
          {submitting ? "Enviando…" : "QUERO CAMINHAR COM JESUS =)"}
        </button>

        <p className="text-[15px] font-bold text-grey opacity-50 mb-10">
          Você pode se desinscrever a qualquer momento. Nós nunca enviaremos
          spam.
        </p>

        {message && (
          <p className="w-full pt-10 pb-10 rounded bg-[#00bf63] text-white font-bold">
            {message}
          </p>
        )}
      </form>
    </>
  );
}
