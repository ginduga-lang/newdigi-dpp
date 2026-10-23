"use client";

import QRCode from "react-qr-code";

type Props = {
  value: string;
};

export default function QRCodeCard({ value }: Props) {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const passportUrl = `${appUrl}/passport/${value}`;

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        QR Verification
      </h2>

      <div className="mt-8 flex justify-center rounded-2xl bg-white p-6">
        <QRCode
          value={passportUrl}
          size={180}
        />
      </div>

      <p className="mt-6 break-all text-center text-sm text-slate-500">
        {passportUrl}
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">

        <button
          type="button"
          className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Download QR
        </button>

        <button
          type="button"
          onClick={() => window.print()}
          className="flex-1 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Print
        </button>

      </div>

    </div>
  );
}