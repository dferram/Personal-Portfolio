export default function Navbar() {
  const links = ['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'];

  return (
    <nav className="fixed top-0 w-full bg-black/85 backdrop-blur border-b border-accent-dark/40 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-2xl font-semibold text-white drop-shadow-[0_0_12px_rgba(229,9,20,0.35)]"
        >
          Fernando Ramírez
        </a>

        <div className="hidden gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative text-sm font-medium uppercase tracking-[0.2em] text-foreground transition duration-300 ease-out hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
