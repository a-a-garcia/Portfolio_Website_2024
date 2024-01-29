import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import useCustomTransition from "./customTransition";
import portfolioIcon from "../assets/portfolio_logo.png";

const Nav = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useCustomTransition(".nav",["transition", "duration-1000", "transform", "translate-y-10"]);

  return (
    <div className="nav">
      <Disclosure
        as="nav"
        className="bg-primaryPurple shadow-lg opacity-90 rounded-lg"
      >
        {() => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-1 flex-nowrap">
              <div className="relative flex items-center justify-between h-full">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-full w-auto object-contain"
                      src={portfolioIcon}
                      alt="Portfolio Icon"
                    />
                  </div>

                  <div className="hidden sm:ml-6 sm:block"></div>
                </div>

                <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3 z-50">
                    <div>
                      <Menu.Button className="relative flex rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <i className="fa-solid fa-bars text-7xl text-white"></i>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                            <Menu.Items className="absolute right-6 sm:top-6 xl:-top-14 xl:-inset-x-52 z-50 mt-2 w-48 origin-top-right rounded-md bg-gray-900 text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    className={classNames(
                                      active ? "bg-secondaryPink" : "",
                                      "block p-5 text-2xl text-white"
                                    )}
                                  >
                                    01. HOME
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/projects"
                                    className={classNames(
                                      active ? "bg-secondaryPink" : "",
                                      "block p-5 text-2xl text-white"
                                    )}
                                  >
                                    02. PROJECTS
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#/about-me"
                                    className={classNames(
                                      active ? "bg-secondaryPink" : "",
                                      "block p-5 text-2xl text-white"
                                    )}
                                  >
                                    03. ABOUT ME
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#/contact"
                                    className={classNames(
                                      active ? "bg-secondaryPink" : "",
                                      "block p-5 text-2xl text-white"
                                    )}
                                  >
                                    04. CONTACT
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Nav;
