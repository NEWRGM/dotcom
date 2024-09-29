import Link from "next/link";

const footerLinks = [
  { href: "/tos", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 NEWRGM INDUSTRIES. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                className="text-xs hover:underline underline-offset-4"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
