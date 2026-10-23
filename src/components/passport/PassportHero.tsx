import { BadgeCheck } from "lucide-react";
import { Part } from "@/types/part";

type Props = {
  part: Part;
};

export default function PassportHero({ part }: Props) {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white shadow-xl">

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

        <div>
          <p className="text-blue-100 text-lg">
            Digital Part Passport
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            {part.part_name}
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            Part Number: {part.part_number}
          </p>
        </div>

        <div className="rounded-full bg-white/20 px-6 py-3 backdrop-blur">
          <div className="flex items-center gap-2">
            <BadgeCheck />
            <span className="font-semibold">
              {part.status}
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}