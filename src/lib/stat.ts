export type ParsedStat = {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  isPercent: boolean;
};

// Split "+21%" → { prefix: "+", target: 21, decimals: 0, suffix: "%" }.
// Returns null for non-numeric values like "End-to-end".
export function parseStat(value: string): ParsedStat | null {
  const match = value.match(/(-?−?\+?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return {
    prefix,
    target: parseFloat(num),
    decimals,
    suffix,
    isPercent: suffix.includes("%"),
  };
}
