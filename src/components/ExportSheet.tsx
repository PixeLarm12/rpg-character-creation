import { useAppContext } from "@/context/AppContext";
import { talentsData } from "@/data/talents";

type ExportSheetProps = {
  data: {
    name: string;
    gender?: string;
    age?: number;
    height?: string;
    weight?: string;
    species?: string;
    elfSubtype?: string | null;
    attributes: Record<string, number>;
    positiveTalents: any[];
    negativeTalents: any[];
    wealth: {
      copper: number;
      silver: number;
      gold: number;
      platinum: number;
    };
    equipment: string[];
  };
};

export function ExportSheet({ data }: ExportSheetProps) {
  const { state, t, language } = useAppContext();
  const te = t.export;

  const talentsMap = Object.fromEntries(
    talentsData.map(t => [t.id, t])
  );

  return (
    <div className="p-10 bg-white text-black w-[794px] min-h-[1123px] font-serif">

      {/* HEADER */}
      <div className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-wide">
          {data.name || "Unnamed Character"}
        </h1>

        <div className="flex flex-wrap gap-6 mt-2 text-sm">
          <span><strong>{te.species}:</strong> {data.species ?? "-"}</span>

          {data.elfSubtype && (
            <span><strong>{te.speciesSubtype}:</strong> {data.elfSubtype}</span>
          )}

          <span><strong>{te.age}:</strong> {data.age ?? "-"}</span>
          <span><strong>{te.gender}:</strong> {data.gender ?? "-"}</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-6">

        {/* LEFT */}
        <div className="space-y-6">

          {/* PHYSICAL */}
          <div className="border border-black p-4">
            <h2 className="font-bold text-lg mb-2">{te.physicalInfo}</h2>
            <div className="text-sm space-y-1">
              <div><strong>{te.height}:</strong> {data.height ?? "-"}</div>
              <div><strong>{te.weight}:</strong> {data.weight ?? "-"}</div>
            </div>
          </div>

          {/* ATTRIBUTES */}
          <div className="border border-black p-4">
            <h2 className="font-bold text-lg mb-2">{te.attributes}</h2>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(data.attributes || {}).map(([k, v]) => (
                <div key={k} className="flex flex-col">
                  <div className="flex justify-left">
                    <span className="uppercase">{k}:</span>
                    <span className="font-bold">{v}</span>
                  </div>

                  <div className="border-b border-dashed border-black ml-12 mt-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* WEALTH */}
          <div className="border border-black p-4">
            <h2 className="font-bold text-lg mb-2">{te.wealth}</h2>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>{te.copper}: {data.wealth?.copper ?? 0}</div>
              <div>{te.silver}: {data.wealth?.silver ?? 0}</div>
              <div>{te.gold}: {data.wealth?.gold ?? 0}</div>
              <div>{te.platinum}: {data.wealth?.platinum ?? 0}</div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* TALENTS */}
          <div className="border border-black p-4">
            <h2 className="font-bold text-lg mb-2">{te.talents}</h2>

            <div className="text-sm space-y-3">

              {/* POSITIVE */}
              <div>
                <strong className="text-green-700">{te.positive}</strong>

                {data.positiveTalents?.length ? (
                  data.positiveTalents
                    .filter((item) => item && item.id)
                    .map((item, i) => {
                      const talent = talentsMap[item.id];

                      return (
                        <div key={item.id ?? i}>
                          + {language === "pt-br"
                            ? talent?.namePtBr
                            : talent?.name}
                        </div>
                      );
                    })
                ) : (
                  <div>-</div>
                )}
              </div>

              {/* NEGATIVE */}
              <div>
                <strong className="text-red-700">{te.negative}</strong>

                {data.negativeTalents?.length ? (
                  data.negativeTalents
                    .filter((item) => item && item.id)
                    .map((item, i) => {
                      const talent = talentsMap[item.id];

                      return (
                        <div key={item.id ?? i}>
                          - {language === "pt-br"
                            ? talent?.namePtBr
                            : talent?.name}
                        </div>
                      );
                    })
                ) : (
                  <div>-</div>
                )}
              </div>

            </div>
          </div>

          {/* EQUIPMENT */}
          <div className="border border-black p-4">
            <h2 className="font-bold text-lg mb-2">{te.equipament}</h2>

            <div className="text-sm space-y-1">
              {data.equipment?.length ? (
                data.equipment.map((e, i) => (
                  <div key={i}>• {e}</div>
                ))
              ) : (
                <div>-</div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* NOTES */}
      <div className="mt-8 border border-black p-4 min-h-[120px]">
        <h2 className="font-bold text-lg mb-2">{te.notes}</h2>
      </div>
    </div>
  );
}