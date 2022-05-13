import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Menu, Transition } from '@headlessui/react'

import logo from '../../assets/logo.svg'

const menuItens = [
  { name: 'Sobre', link: '/#about' },
  { name: 'Educação', link: '/#education' },
  { name: 'Experiência', link: '/#works' },
  { name: 'Portfólio', link: '/#portfolio' },
  { name: 'Contato', link: '/' }
]

export function Header() {
  return (
    <header className="w-full fixed z-50">
      <div className="custom-container flex items-center justify-between">
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
                <Menu.Button className="relative z-20">Fechar</Menu.Button>
              ) : (
                <Menu.Button className="relative z-20">Abrir</Menu.Button>
              )}

              <Transition
                as={React.Fragment}
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
      </div>
    </header>
  )
}
