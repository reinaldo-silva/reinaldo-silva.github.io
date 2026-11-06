"use client";

import { useSyncExternalStore } from "react";

// Datas calculadas no navegador: o site é estático, então a idade e o ano
// precisam ser calculados na hora em que a página abre, não no build.

const subscribe = () => () => {};

export function ageFrom(birthDate: string, now = new Date()) {
  const [y, m, d] = birthDate.split("-").map(Number);
  let age = now.getFullYear() - y;
  const beforeBirthday = now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d);
  if (beforeBirthday) age--;
  return age;
}

export function Age({ birthDate }: { birthDate: string }) {
  const age = useSyncExternalStore(subscribe, () => ageFrom(birthDate), () => null);
  return <>{age ?? "…"}</>;
}

export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => null);
  return <>{year ?? ""}</>;
}
