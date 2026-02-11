"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../theme/mode-toggle";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

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

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
        { href: "/programs", label: "Courses" },
        { href: "/contact", label: "Contact" },
    ];

    const handleWhatsAppClick = () => {
        const message = "Hi! I'm interested in joining Sabeel Ul Quran.";
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm" : "bg-transparent"
			}`}>
			<div className="mx-auto max-w-screen-xl flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-200 tracking-wide",
                                isActive(link.href) 
                                    ? "text-gold-400 font-semibold scale-105" 
                                    : "text-foreground/80 hover:text-gold-400 hover:scale-105"
                            )}>
                            {link.label}
                        </Link>
                    ))}
				</nav>

				<div className="hidden md:flex items-center gap-4">
				    <ModeToggle/>
                    <Button 
                        onClick={handleWhatsAppClick}
                        className="bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-full px-6 transition-transform hover:scale-105"
                    >
                        Join Now
                    </Button>
				</div>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center gap-4">
                    <ModeToggle />
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="text-foreground hover:text-gold-400">
								<Menu className="h-8 w-8" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-full sm:w-[400px] border-l border-gold-500/20 bg-gradient-to-b from-black via-zinc-950 to-black p-0">
                            <div className="flex flex-col h-full relative overflow-hidden">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -z-10" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -z-10" />

                                {/* Sheet Header with Logo */}
                                <div className="p-6 border-b border-gold-500/10 flex justify-between items-center bg-black/20 backdrop-blur-sm">
                                    <Logo />
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 flex flex-col justify-center px-8 gap-8">
                                    {links.map((link, index) => (
                                        <SheetClose key={link.href} asChild>
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "text-3xl md:text-4xl font-serif font-medium transition-all duration-300 flex items-center justify-between group",
                                                    isActive(link.href) 
                                                        ? "text-gold-400 translate-x-2" 
                                                        : "text-white/60 hover:text-gold-300 hover:translate-x-2"
                                                )}>
                                                <span>{link.label}</span>
                                                <ArrowRight className={cn(
                                                    "w-6 h-6 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-gold-500",
                                                    isActive(link.href) && "opacity-100 translate-x-0"
                                                )} />
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                {/* Footer Actions */}
                                <div className="p-8 border-t border-gold-500/10 bg-black/20 backdrop-blur-sm space-y-6">
                                    <Button 
                                        onClick={handleWhatsAppClick}
                                        className="w-full bg-gold-500 hover:bg-gold-600 text-black text-lg py-6 font-bold rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 group"
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                                        Join Now
                                    </Button>
                                    
                                    <div className="text-center space-y-4">
                                        <p className="text-sm text-white/30 font-medium tracking-[0.2em] uppercase">
                                            Sabeel Ul Quran
                                        </p>
                                    </div>
                                </div>
                            </div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}