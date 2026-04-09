import { LINKS } from "@/config/links";

export function Footer() {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 md:py-16 px-6 border-t border-border pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a 
            href="#top" 
            onClick={handleLogoClick}
            className="flex items-baseline gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Zahar
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              Go
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <a
              href="#program"
              onClick={(e) => handleNavClick(e, "#program")}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
            >
              Программа
            </a>
            <a
              href="#mentor"
              onClick={(e) => handleNavClick(e, "#mentor")}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
            >
              Ментор
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
            >
              Тарифы
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "#faq")}
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
            >
              FAQ
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
            >
              Telegram
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span className="font-serif font-semibold text-foreground">ZaharGo</span>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
