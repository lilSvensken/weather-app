type Mods = Record<string, boolean | string>

export function cn(cls: string[], mods: Mods = {}): string {
  const modsStr = Object.entries(mods)
    ?.filter(([, value]) => !!value)
    ?.map(([item]) => item);

  return [
    ...cls.filter(Boolean),
    ...modsStr,
  ].join(' ');
}
