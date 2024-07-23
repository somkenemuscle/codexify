'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from '@reach/visually-hidden';
import { Button } from "@/components/ui/button"


const MobileNav = () => {
    const pathname = usePathname();

    return (
        <header className="header">
            <Link href='/' className="flex items-center gap-3 md:py-2">
                <Image
                    src='/assets/images/logo-text.svg'
                    width={180}
                    height={28}
                    alt="logo"
                />
            </Link>

            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src='/assets/icons/menu.svg'
                                width={32}
                                height={32}
                                className="cursor-pointer"
                                alt="menu"
                            />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <SheetHeader>
                                    <VisuallyHidden>
                                        <SheetTitle>Navigation Menu</SheetTitle>
                                    </VisuallyHidden>
                                    <SheetDescription>
                                        <Image
                                            src='/assets/images/logo-text.svg'
                                            width={152}
                                            height={23}
                                            className="cursor-pointer"
                                            alt="logo"
                                        />
                                    </SheetDescription>
                                </SheetHeader>

                                <ul className='header-nav_elements'>
                                    {navLinks.map((link) => {
                                        const isActive = link.route === pathname;

                                        return (
                                            <li key={link.route} className={`${isActive && 'gradient-text'} p-18 whitespace-nowrap text-dark-700`}>
                                                <Link className='sidebar-link cursor-pointer' href={link.route}>
                                                    <Image
                                                        src={link.icon}
                                                        alt='logo'
                                                        width={24}
                                                        height={24}
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover' variant="outline">
                        <Link href='/sign-in'>Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    );
};

export default MobileNav;
