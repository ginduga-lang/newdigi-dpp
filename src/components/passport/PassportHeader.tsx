type Props = {
  partNumber: string;
  partName: string;
  status: string;
};


export default function PassportHeader({
  partNumber,
  partName,
  status,
}: Props) {

  return (

    <div className="rounded-3xl bg-white p-8 shadow-lg">


      <div className="mb-4 flex items-center gap-3">


        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
          ✓ Verified
        </span>


        <span className="rounded-full bg-slate-100 px-4 py-1 text-sm text-slate-700">
          {status}
        </span>


      </div>



      <h1 className="text-4xl font-bold text-slate-900">
        Digital Part Passport
      </h1>


      <h2 className="mt-4 text-2xl font-semibold text-blue-600">
        {partName}
      </h2>


      <p className="mt-2 text-slate-500">
        Part Number: {partNumber}
      </p>


    </div>

  );

}