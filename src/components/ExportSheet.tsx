import { useAppContext } from "@/context/AppContext";
import { talentsData } from "@/data/talents";
import { speciesData } from "@/data/species";

type ExportSheetProps = {
  data: {
    name: string;
    gender?: string;
    age?: number;
    hp?: number;
    mana?: number;
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
    notes: string;
  };
};

export function ExportSheet({ data }: ExportSheetProps) {
  const { t, language } = useAppContext();
  const te = t.export;
  const ts = t.species;
  const tweights = t.basics.weights;
  const theights = t.basics.heights;
  const tage = t.basics.ages;
  const tgenders = t.basics.genders;

  const talentsMap = Object.fromEntries(
    talentsData.map(t => [t.id, t])
  );

  const speciesMap = Object.fromEntries(
    speciesData.map(s => [s.id, s])
  );

  const specie = speciesMap[data.species];
  const specieTranslated = ts[specie.translationKey];

  const selectedSubtype = specie?.subtypes?.find(
    (s) => s.id === data.elfSubtype
  );

  const imageSrc = selectedSubtype?.image ?? specie.image;

  const ageTranslated = tage[data.age];
  const weightTranslated = tweights[data.weight];
  const heightTranslated = theights[data.height];
  const genderTranslated = tgenders[data.gender];
  const elfSubtypeTranslated = ts[data.elfSubtype];

  const passiveTranslated = specie.hasSubtypes
    ? (language === "pt-br"
      ? specie.subtypes.find(s => s.id == data.elfSubtype)?.passivePtBr
      : specie.subtypes.find(s => s.id == data.elfSubtype)?.passive)
    : (language === "pt-br"
      ? specie.passivePtBr
      : specie.passive);

  const renderNotes = () => {
    if (!data.notes) return <span>-</span>;

    return data.notes.split("\n").map((line, i) => (
      <p key={i} className="mb-2 last:mb-0">{line}</p>
    ));
  };

  return (
    <div className="p-6 bg-white text-black w-[794px] min-h-[1123px] font-serif">

      {/* HEADER */}
      <div className="border-b border-black pb-3 mb-4 flex justify-between gap-4">

        <div className="flex-1">
          <h1 className="text-4xl font-bold">{data.name || "Unnamed Character"}</h1>

          <div className="flex flex-wrap gap-4 mt-1 text">
            <span><strong>{te.species}:</strong> {specieTranslated.name}</span>

            {selectedSubtype && (
              <span><strong>{te.speciesSubtype}:</strong> {elfSubtypeTranslated?.name}</span>
            )}

            <span><strong>{te.age}:</strong> {ageTranslated ?? "-"}</span>
            <span><strong>{te.gender}:</strong> {genderTranslated ?? "-"}</span>
            <span><strong>{te.height}:</strong> {heightTranslated ?? "-"}</span>
            <span><strong>{te.weight}:</strong> {weightTranslated ?? "-"}</span>
          </div>

          <div className="mt-1 italic">
            {passiveTranslated}
          </div>
        </div>

        <div className="w-28 h-28 border border-black overflow-hidden">
          {imageSrc && (
            <img src={imageSrc} className="w-full h-full object-cover" />
          )}
        </div>

      </div>

      {/* TOP GRID */}
      <div className="grid grid-cols-2 gap-4">

        {/* LEFT */}
        <div className="space-y-4">

          {/* HP + ATTRIBUTES */}
          <div className="border border-black p-3">
            <h2 className="font-bold text-2xl mb-2">{ te.attributes }</h2>

            <div className="grid grid-cols-2 mb-2 text-xl">
              <div><strong>{te.hp}</strong>: {data.hp}/{data.hp}</div>
              <div><strong>{te.mana}</strong>: {data.mana}/{data.mana}</div>
            </div>

            <div className="grid grid-cols-3 gap-1 mt-4">
              {Object.entries(data.attributes).map(([k, v]) => (
                <div key={k} className="flex justify-left">
                  <span>{k}: </span>
                  <span className="ml-2 font-bold">{v}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-4">

          {/* TALENTS + WEALTH */}
          <div className="border border-black p-3">
            <div className="grid grid-cols-2 gap-4">

              {/* TALENTS */}
              <div>
                <h2 className="font-bold text-2xl mb-1">{te.talents}</h2>

                <div className="space-y-2">

                  <div>
                    <strong className="text-green-700">{te.positive}</strong>
                    {data.positiveTalents.map((t) => {
                      const talent = talentsMap[t.id];
                      return (
                        <div key={t.id}>
                          + {language === "pt-br" ? talent?.namePtBr : talent?.name}
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <strong className="text-red-700">{te.negative}</strong>
                    {data.negativeTalents.map((t) => {
                      const talent = talentsMap[t.id];
                      return (
                        <div key={t.id}>
                          - {language === "pt-br" ? talent?.namePtBr : talent?.name}
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* WEALTH */}
              <div>
                <h2 className="font-bold text-2xl mb-1">{te.wealth}</h2>

                <div className="space-y-1">
                  <div><strong>{te.copper}</strong>: {data.wealth.copper}</div>
                  <div><strong>{te.silver}</strong>: {data.wealth.silver}</div>
                  <div><strong>{te.gold}</strong>: {data.wealth.gold}</div>
                  <div><strong>{te.platinum}</strong>: {data.wealth.platinum}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* EQUIPMENT FULL WIDTH */}
      <div className="mt-4 border border-black p-3">
        <h2 className="font-bold text-2xl mb-2">{te.equipament}</h2>

        <div className="grid grid-cols-3 gap-1">
          {data.equipment.map((e, i) => (
            <div key={i}>+ {e}</div>
          ))}
        </div>
      </div>

      {/* NOTES */}
      <div className="mt-4 border border-black p-4 min-h-[500px]">
        <h2 className="font-bold text-2xl mb-2">{te.notes}</h2>

        <div className="leading-relaxed break-all">
          {renderNotes()}
        </div>
      </div>

    </div>
  );
}