"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "./i18n";

type Theme = "light" | "dark";

const labels = {
  "pt-BR": {
    light: "Ativar tema claro",
    dark: "Ativar tema escuro",
  },
  fr: {
    light: "Activer le theme clair",
    dark: "Activer le theme sombre",
  },
} satisfies Record<Locale, Record<Theme, string>>;

const themeChangeEvent = "themechange";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getThemeSnapshot(): Theme {
  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "light" || currentTheme === "dark") {
    return currentTheme;
  }

  return getInitialTheme();
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      type="button"
      aria-label={labels[locale][nextTheme]}
      title={labels[locale][nextTheme]}
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--text-muted)] transition duration-200 hover:bg-[var(--surface-muted)] hover:text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
    >
      <span
        aria-hidden="true"
        className={`h-4 w-4 rounded-full border border-current transition duration-200 ${
          theme === "dark" ? "bg-current" : "bg-transparent"
        }`}
      >
        <span
          className={`block h-full w-1/2 rounded-l-full bg-[var(--surface)] transition duration-200 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
