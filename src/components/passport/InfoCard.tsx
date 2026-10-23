type Props = {
  label: string;
  value: string | number;
};

export default function InfoCard({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">

      <p className="text-sm uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-slate-900">
        {value}
      </h3>

    </div>
  );
}