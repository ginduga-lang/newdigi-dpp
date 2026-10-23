"use client";

import { QRCodeSVG } from "qrcode.react";


type QRCodeGeneratorProps = {
  partNumber: string;
};


export default function QRCodeGenerator({
  partNumber,
}: QRCodeGeneratorProps) {


  const passportUrl =
    `${window.location.origin}/passport/${partNumber}`;



  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">


      <h3 className="mb-4 text-lg font-bold text-slate-900">
        Digital Passport QR Code
      </h3>



      <div className="flex justify-center">

        <QRCodeSVG
          value={passportUrl}
          size={180}
        />

      </div>



      <p className="mt-4 break-all text-center text-sm text-slate-500">

        {passportUrl}

      </p>


    </div>

  );
}