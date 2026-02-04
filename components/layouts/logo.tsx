import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 invert-25 dark:invert-0">
      <Image
        src="/logo.png" // or your public path
        alt="Logo"
        width={110}
        height={50}
        priority
      />
    </Link>
  );
};

export default Logo;