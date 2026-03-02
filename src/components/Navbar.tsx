import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Services", "Pricing", "Why Choose Us", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const itemIds = useMemo(
    () => navItems.map((item) => item.toLowerCase().replace(/\s+/g, "")),
    [],
  );

  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const navListRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleClick = (item: string) => {
    setActiveItem(item);
    setOpen(false);
    const id = item.toLowerCase().replace(/\s+/g, "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const updateIndicatorToItem = (item: string) => {
    const btn = itemRefs.current[item];
    const list = navListRef.current;
    if (!btn || !list) return;

    const b = btn.getBoundingClientRect();
    const l = list.getBoundingClientRect();
    setIndicator({ left: b.left - l.left, width: b.width, opacity: 1 });
  };

  useEffect(() => {
    // Set initial underline position
    updateIndicatorToItem(activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getCurrentSectionItem = () => {
      // Determine which section is currently most "active" based on viewport
      const viewportMid = window.innerHeight * 0.35;

      let bestItem = activeItem;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < itemIds.length; i++) {
        const id = itemIds[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - viewportMid);

        // Only consider sections that are near/above the fold
        if (rect.bottom <= 0) continue;

        if (dist < bestDist) {
          bestDist = dist;
          bestItem = navItems[i];
        }
      }

      return bestItem;
    };

    const onScroll = () => {
      const next = getCurrentSectionItem();
      if (next !== activeItem) {
        setActiveItem(next);
      }
    };

    const onResize = () => updateIndicatorToItem(activeItem);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [activeItem, itemIds]);

  useEffect(() => {
    updateIndicatorToItem(activeItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3">
        <span className="text-lg font-bold text-primary-foreground tracking-wide">Liftrepair</span>

        {/* Desktop */}
        <ul ref={navListRef} className="hidden md:flex items-center gap-6 relative">
          <span
            aria-hidden="true"
            className="absolute -bottom-1 h-0.5 bg-accent transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          {navItems.map((item) => (
            <li key={item}>
              <button
                ref={(el) => {
                  itemRefs.current[item] = el;
                }}
                onClick={() => handleClick(item)}
                className="text-sm font-medium transition-colors relative text-primary-foreground"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClick("Contact")}
              className="bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm hover:brightness-110 transition"
            >
              Request Service
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          <ul className="flex flex-col items-center gap-3 pt-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleClick(item)}
                  className="text-sm font-medium transition-colors relative text-primary-foreground"
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transition-opacity ${
                    activeItem === item ? "opacity-100" : "opacity-0 hover:opacity-100"
                  }`} />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleClick("Contact")}
                className="bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm"
              >
                Request Service
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
