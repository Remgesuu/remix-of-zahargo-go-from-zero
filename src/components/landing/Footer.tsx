const TG_LINK = "https://t.me/zaharich777";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-baseline gap-0.5">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Zahar
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              Go
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="#program"
              className="hover:text-foreground transition-colors"
            >
              Программа
            </a>
            <a
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#faq"
              className="hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Telegram
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span className="font-serif font-semibold text-foreground">ZaharGo</span>{" "}
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
