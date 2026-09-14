(async () => {
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const motion = reduceMotion
  ? null
  : await import("https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm").catch(() => null);

const canonicalNavOrder = ["about", "research", "experience", "projects"];

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try { localStorage.setItem("research-theme", theme); } catch (error) {}
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

function animateReflow(container, mutate, duration = 0.28) {
  const children = [...container.children];
  const before = new Map(children.map((child) => [child, child.getBoundingClientRect()]));
  mutate();

  if (!motion) return;
  [...container.children].forEach((child) => {
    const previous = before.get(child);
    const next = child.getBoundingClientRect();
    if (!previous || (!next.width && !next.height)) return;
    const dx = previous.left - next.left;
    const dy = previous.top - next.top;
    if (!dx && !dy) return;
    child.style.transform = `translate(${dx}px, ${dy}px)`;
    const animation = motion.animate(child, { transform: [`translate(${dx}px, ${dy}px)`, "translate(0, 0)"] }, { duration, easing: "ease-out" });
    animation.finished.then(() => child.style.removeProperty("transform")).catch(() => {});
  });
}

function orderedFirst(container, selected, order, activeClass) {
  const entries = [...container.children];
  const byValue = new Map(entries.map((entry) => [entry.dataset.sectionLink || entry.dataset.filter, entry]));
  const arranged = [selected, ...order.filter((value) => value !== selected)]
    .map((value) => byValue.get(value))
    .filter(Boolean);

  animateReflow(container, () => {
    arranged.forEach((entry) => {
      entry.classList.toggle(activeClass, (entry.dataset.sectionLink || entry.dataset.filter) === selected);
      if (entry.matches("button")) entry.setAttribute("aria-pressed", String(entry.dataset.filter === selected));
      if (entry.matches("a")) {
        if (entry.dataset.sectionLink === selected) entry.setAttribute("aria-current", "page");
        else entry.removeAttribute("aria-current");
      }
      container.append(entry);
    });
  });
}

function groupPublicationsByYear(container) {
  const headings = [...container.querySelectorAll(":scope > h2.bibliography")];

  return headings.map((heading) => {
    const section = document.createElement("section");
    const list = document.createElement("div");
    section.className = "publication-year";
    section.dataset.year = heading.textContent.trim();
    list.className = "publication-list";

    heading.before(section);
    section.append(heading, list);

    let sibling = section.nextElementSibling;
    while (sibling && !sibling.matches("h2.bibliography")) {
      const next = sibling.nextElementSibling;
      list.append(sibling);
      sibling = next;
    }
    return section;
  });
}

document.querySelectorAll("[data-ordered-nav]").forEach((nav) => {
  nav.addEventListener("click", (event) => {
    const link = event.target.closest("[data-section-link]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.classList.contains("is-active")) return;

    event.preventDefault();
    orderedFirst(nav, link.dataset.sectionLink, canonicalNavOrder, "is-active");
    window.setTimeout(() => window.location.assign(link.href), reduceMotion ? 0 : 230);
  });
});

const filterContainer = document.querySelector("[data-research-filters]");
if (filterContainer) {
  const publicationRoot = document.querySelector("[data-publication-list]");
  const yearSections = groupPublicationsByYear(publicationRoot);
  const publications = [...publicationRoot.querySelectorAll("[data-publication]")];
  const status = document.querySelector("[data-filter-status]");

  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const filter = button.dataset.filter;
    [...filterContainer.querySelectorAll("[data-filter]")].forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    const visible = publications.filter((publication) => {
      const tags = (publication.dataset.tags || "").split(/\s+/);
      return filter === "all" || tags.includes(filter);
    });

    publications.forEach((publication) => {
      publication.hidden = !visible.includes(publication);
    });
    yearSections.forEach((section) => {
      section.hidden = !section.querySelector("[data-publication]:not([hidden])");
    });

    status.textContent = filter === "all"
      ? `Showing all ${publications.length} publications.`
      : `Showing ${visible.length} publication${visible.length === 1 ? "" : "s"} in ${button.textContent.trim()}.`;
  });
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {}
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

document.querySelectorAll("[data-copy-bibtex]").forEach((button) => {
  button.addEventListener("click", async () => {
    const source = button.parentElement?.querySelector("[data-bibtex-source]")?.textContent;
    if (!source) return;
    const originalLabel = button.textContent;
    try {
      await copyText(source.trim());
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = originalLabel; }, 1250);
    } catch (error) {
      button.textContent = "Try again";
      window.setTimeout(() => { button.textContent = originalLabel; }, 1250);
    }
  });
});

document.querySelector("[data-reveal-news]")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const hiddenItems = [...document.querySelectorAll(".news-list--full .is-hidden")];
  hiddenItems.forEach((item) => {
    item.classList.remove("is-hidden");
    if (motion) motion.animate(item, { opacity: [0, 1], transform: ["translateY(6px)", "translateY(0)"] }, { duration: 0.18, easing: "ease-out" });
  });
  button.remove();
});

if (motion) {
  const main = document.querySelector("main");
  if (main) {
    motion.animate(main, { opacity: [0, 1], transform: ["translateY(6px)", "translateY(0)"] }, { duration: 0.18, easing: "ease-out" });
  }
}
})();
