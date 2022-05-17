import { motion } from 'framer-motion'

const containerVariant = {
  hidden: {
    opacity: 0,
    y: '-150%'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 1
    }
  }
}

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Hero() {
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="custom-container h-screen flex flex-col justify-center"
    >
      <motion.span
        variants={itemVariant}
        className="font-mono text-brand-teal-500 mb-8"
      >
        Olá, meu nome é
      </motion.span>

      <motion.h1
        variants={itemVariant}
        className="text-4xl xs:text-6xl md:text-7xl font-bold mb-6"
      >
        José de Souza.
      </motion.h1>

      <motion.h2
        variants={itemVariant}
        className="text-2xl xs:text-4xl md:text-6xl font-semibold text-brand-gray-700 mb-8"
      >
        Jornalista e web designer
      </motion.h2>

      <motion.p
        variants={itemVariant}
        className="text-brand-gray-700 max-w-sm md:max-w-md"
      >
        Bacharel em jornalismo com 5 anos de atuação na área de comunicação
        empresarial. Atualmente focado em análise de dados, criação de sites e
        aplicações web.
      </motion.p>
    </motion.section>
  )
}
