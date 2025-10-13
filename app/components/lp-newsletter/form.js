"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

export default function SubscribeForm({ className, formHeadLine }) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

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
    if (!validate()) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/v1/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      // await new Promise((r) => setTimeout(r, 600));
      setFirstName("");
      setEmail("");
      setErrors({});
      router.push("/agradecimento");
    } catch (error) {
      setMessage("Falha ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const defaultClass =
    "bg-white p-30 pt-24 pb-24 border-1 border-[#EAEAEA] shadow-md rounded-[1.25rem]";
  const combinedClasses = twMerge(defaultClass, className);

  return (
    <div className={combinedClasses}>
      <p className="text-[20px] max-w-212 laptop:max-w-320 text-center m-auto pb-24">
        {formHeadLine}
      </p>

      <form onSubmit={onSubmit} className="max-w-620 font-alegreya">
        <div>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            placeholder="Digite seu nome..."
            onChange={(event) => setFirstName(event.target.value)}
            required
            className="w-full  rounded text-[20px] border-2 px-10 bg-white h-48 border-[#ffe46e] mb-10"
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
            className="w-full text-[20px] rounded border-2 px-10 bg-white h-48 border-[#ffe46e] mb-10"
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
          className="w-full rounded bg-[#ffe46e] p-10 pr-26 pl-26 rounded-md text-[#1e1c16] disabled:opacity-50 text-[15px] font-redhatdisplay font-bold mb-10"
        >
          {submitting ? "Enviando…" : "Quero receber a carta diariamente =)"}
        </button>

        <p className="text-grey text-center text-[12px] opacity-50 mb-10">
          Você pode se desinscrever a qualquer momento
        </p>

        {/* {message && (
          <p className="w-full pt-10 pb-10 rounded bg-[#00bf63] text-center text-white font-bold">
            {message}
          </p>
        )} */}
      </form>
    </div>
  );
}
