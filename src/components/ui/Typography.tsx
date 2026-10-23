import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-2xl font-semibold text-slate-900">
      {children}
    </h2>
  );
}

export function CardTitle({ children }: Props) {
  return (
    <h3 className="text-xl font-semibold text-slate-900">
      {children}
    </h3>
  );
}

export function BodyText({ children }: Props) {
  return (
    <p className="text-sm leading-6 text-slate-600">
      {children}
    </p>
  );
}

export function SmallText({ children }: Props) {
  return (
    <p className="text-xs text-slate-500">
      {children}
    </p>
  );
}