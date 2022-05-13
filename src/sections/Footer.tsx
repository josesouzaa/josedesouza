import { RiArrowUpCircleFill } from 'react-icons/ri'

export function Footer() {
  return (
    <footer className="flex justify-center flex-col items-center gap-4 mb-16">
      <button>
        <RiArrowUpCircleFill className="fill-brand-gray-700 hover:fill-brand-teal-500 text-4xl transition-all duration-300 animate-bounce" />
      </button>
      <p>Copyright © 2021 José de Souza. All Rights Reserved.</p>
    </footer>
  )
}
