import React from 'react'

export function Hero() {
  return (
    <section className="custom-container h-screen flex flex-col justify-center">
      <span className="font-mono text-brand-teal-500 mb-8">
        Olá, meu nome é
      </span>

      <h1 className="text-4xl xs:text-6xl md:text-7xl font-bold mb-6">
        José de Souza.
      </h1>

      <h2 className="text-2xl xs:text-4xl md:text-6xl font-semibold text-brand-gray-700 mb-8">
        Jornalista e web designer
      </h2>

      <p className="text-brand-gray-700 max-w-sm md:max-w-md">
        Bacharel em jornalismo com 5 anos de atuação na área de comunicação
        empresarial. Atualmente focado em análise de dados, criação de sites e
        aplicações web.
      </p>
    </section>
  )
}
