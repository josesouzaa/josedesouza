import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import { Menu, Transition } from '@headlessui/react'

import { RiMenuFill, RiCloseFill } from 'react-icons/ri'

import logo from '../../../assets/logo.svg'
import { Fragment } from 'react'

const menuItens = [
  { name: 'Sobre', link: '/#about' },
  { name: 'Educação', link: '/#education' },
  { name: 'Experiência', link: '/#works' },
  { name: 'Portfólio', link: '/#portfolio' },
  { name: 'Contato', link: '/' }
]

const containerVariant = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.5
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: '-50%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Header() {
  return (
    <motion.header
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="w-full fixed z-50 bg-brand-blue-800 shadow-md"
    >
      <motion.div
        variants={itemVariant}
        className="custom-container flex items-center justify-between"
      >
        <Link href="/" passHref>
          <Image src={logo} alt="José de Souza" />
        </Link>

        <nav className="hidden md:block">
          <ul className="font-mono flex gap-4">
            {menuItens.map((i) => (
              <li key={i.name}>
                <a
                  href={i.link}
                  className="text-sm hover:text-brand-teal-500 transition-colors line-on-hover"
                >
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Menu as="nav" className="block md:hidden">
          {({ open }) => (
            <>
              {open ? (
                <Menu.Button className="relative z-20 hover:bg-brand-blue-900 p-2 rounded text-brand-gray-400 text-2xl bg-brand-teal-500 bg-opacity-50 transition-all duration-300">
                  <RiCloseFill />
                </Menu.Button>
              ) : (
                <Menu.Button className="relative z-20 bg-brand-blue-900 p-2 rounded text-brand-gray-400 text-2xl hover:bg-brand-teal-500 hover:bg-opacity-50 transition-all duration-300">
                  <RiMenuFill />
                </Menu.Button>
              )}

              <Transition
                as={Fragment}
                enter="transition duration-200 ease-in"
                enterFrom="transform translate-x-[100%] opacity-0"
                enterTo="transform translate-x-0 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform translate-x-0 opacity-100"
                leaveTo="transform translate-x-[100%] opacity-0"
              >
                <Menu.Items
                  as="ul"
                  className="fixed z-10 font-mono text-2xl flex flex-col items-center justify-center gap-12 w-11/12 sm:w-2/3 h-screen top-0 right-0 bg-brand-blue-800"
                >
                  {menuItens.map((i) => (
                    <Menu.Item as="li" key={i.name}>
                      <a
                        href={i.link}
                        className="hover:text-brand-teal-500 transition-colors line-on-hover"
                      >
                        {i.name}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>

              {open && (
                <div className="fixed z-[5] top-0 left-0 w-screen h-screen bg-black opacity-40 transition-opacity duration-300" />
              )}
            </>
          )}
        </Menu>
      </motion.div>
    </motion.header>
  )
}
