"use client"
import {Menu, Transition} from '@headlessui/react'
import ChevronDownIcon from "@/components/atoms/icons/ChevronDownIcon";
import PetsIcon from "@/components/atoms/icons/PetsIcon";
import ProductsIcon from "@/components/atoms/icons/ProductsIcon";
import Link from "next/link";


export default function CategoryPopover() {
    const categories = [
        {
            name: 'Pets',
            description: 'Take a look at some of our pets',
            href: '/category/pets',
            icon: PetsIcon,
        },
        {
            name: 'Products',
            description: 'Wide range of products',
            href: '/category/products',
            icon: ProductsIcon,
        }
    ]

    return (
        <Menu as={"div"} className="relative">
            <Menu.Button
                className={`group inline-flex items-center text-dark-blue font-bold focus:`}
            >
                <span>Categories</span>
                <ChevronDownIcon strokeWidth={2}
                                 className={`text-dark-blue ui-open:rotate-180 ui-open:transform ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-dark-blue/80`}
                                 aria-hidden="true"/>
            </Menu.Button>
            <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Menu.Items
                    className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 xl:max-w-2xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative grid gap-8 bg-white p-7 xl:grid-cols-2">
                            {categories.map((item) => (
                                <Menu.Item key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                    >
                                        <div
                                            className="flex h-10 w-10 shrink-0 items-center justify-center text-dark-blue sm:h-12 sm:w-12">
                                            <item.icon aria-hidden="true"/>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Link>
                                </Menu.Item>
                            ))}
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
