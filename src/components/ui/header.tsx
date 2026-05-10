import { useState, useEffect } from 'react';
import type React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

interface NavLink {
  label: string;
  href: string;
}

export function Header({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out',
        {
          'bg-[#191919]/95 supports-[backdrop-filter]:bg-[#191919]/80 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-[#333]':
            scrolled && !open,
          'bg-[#191919]': !scrolled && !open,
          'bg-[#191919]/95': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full max-w-7xl mx-auto items-center justify-between px-4 md:px-8 transition-all duration-300 ease-out',
          {
            'h-14': scrolled,
          },
        )}
      >
        <a href="#" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <img src="/Netflix_2016_N_logo.svg" alt="Netflix N logo" className="h-7 w-auto" />
          <span>Netflix Catalog Analysis</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <a
              key={i}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'text-[#A0A0A0] hover:text-white hover:bg-[#E50914]/10 cursor-pointer'
              )}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/levente-murgas/levente-murgas.github.io/blob/main/final_assignment.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'ml-2 border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white cursor-pointer'
            )}
          >
            View Notebook
          </a>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-[#444] text-white hover:bg-[#E50914]/10"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden md:hidden bg-[#191919]/98 backdrop-blur-lg',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex h-full w-full flex-col justify-between gap-y-2 p-4">
          <div className="grid gap-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start',
                  }),
                  'text-[#A0A0A0] hover:text-white hover:bg-[#E50914]/10 cursor-pointer'
                )}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/levente-murgas/levente-murgas.github.io/blob/main/final_assignment.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', className: 'justify-start' }),
                'border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white cursor-pointer'
              )}
            >
              View Notebook
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
