"use client";
import {Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from 'react'

export default function SortFilterCategory({}) {
    const allFilter = ["Popular", "High to Low", "Low to High"];
    const [filter, setFilter] = useState("Popular");
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                className="border rounded-full inline-flex items-center pl-4 pr-2.5 py-1 text-sm gap-2 text-nickel">
                <span>Sort by: {filter}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-nickel" fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 mt-2 w-full origin-top-right overflow-hidden text-sm divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {allFilter.map((af, index) => (
                        <Menu.Item key={"filter-" + index} as={"div"}
                                   className="text-nickel hover:text-rich-black p-2 bg-white hover:bg-gray-50">
                            <button type={"button"} onClick={() => setFilter(af)}
                                    className={"w-full text-left"}>{af}
                            </button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>

        </Menu>
    )

}