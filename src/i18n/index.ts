"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import React from "react";
import ko from "./ko.json";
import en from "./en.json";

type Lang = "ko" | "en";
const translations: Record<Lang, Record<string, unknown>> = { ko, en };

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

type I18nContext = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tObj: <T = unknown>(key: string) => T;
};

const I18nCtx = createContext<I18nContext | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  }, []);

  const t = useCallback(
    (key: string) => getNestedValue(translations[lang], key),
    [lang]
  );

  const tArray = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let current: unknown = translations[lang];
      for (const k of keys) {
        if (current && typeof current === "object" && k in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[k];
        } else {
          return [];
        }
      }
      return Array.isArray(current) ? (current as string[]) : [];
    },
    [lang]
  );

  const tObj = useCallback(
    <T = unknown,>(key: string): T => {
      const keys = key.split(".");
      let current: unknown = translations[lang];
      for (const k of keys) {
        if (current && typeof current === "object" && k in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[k];
        } else {
          return [] as T;
        }
      }
      return current as T;
    },
    [lang]
  );

  return React.createElement(
    I18nCtx.Provider,
    { value: { lang, setLang, t, tArray, tObj } },
    children
  );
}

export function useTranslation() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}
