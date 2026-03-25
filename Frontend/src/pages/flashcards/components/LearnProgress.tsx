interface LearnProgressProps {
  current: number;
  total: number;
}

export function LearnProgress({ current, total }: LearnProgressProps) {
  return <div className="text-5xl text-white">{current}/{total}</div>;
}
export default LearnProgress;