"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../theme/mode-toggle";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				isScrolled ? "bg-background/60 backdrop-blur-md" : ""
			}`}>
			<div className="mx-auto max-w-screen-xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden  md:flex items-center gap-4 lg:gap-6">
					<Link
						href="/"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/") &&
								"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Home
					</Link>

					<Link
						href="/about"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/about") &&
								"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						About
					</Link>
					<Link
						href="/events"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/events") &&
								"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Events
					</Link>
					<Link
						href="/programs"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/programs") &&
								"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Programs
					</Link>
					<Link
						href="/contact"
						className={cn(
							"text-sm font-medium transition-colors ",
							isActive("/contact") &&
								"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
						)}>
						Contact
					</Link>
				</nav>

				<div className="hidden md:flex items-center gap-2">
					
					
				    <ModeToggle/>

				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[250px] sm:w-[300px]">
							<nav className="flex flex-col gap-4 mt-8 items-center">
								<Link
									href="/"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/") &&
											"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Home
								</Link>
								<Link
									href="/learning-ai"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/learning-ai") &&
											"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Learning
								</Link>
								<Link
									href="/journey"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/journey") &&
											"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									My Journey
								</Link>
								<Link
									href="/pricing"
									className={cn(
										"text-sm font-medium transition-colors ",
										isActive("/pricing") &&
											"text-gold-400 hover:text-gold-500 transition-all duration-100 ease-in font-semibold underline underline-offset-4"
									)}>
									Pricing
								</Link>
								
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}