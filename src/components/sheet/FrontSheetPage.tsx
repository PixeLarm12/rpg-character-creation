import { useAppContext } from "@/context/AppContext";
import { talentsData } from "@/data/talents";
import { speciesData } from "@/data/species";

type FrontSheetProps = {
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

export function FrontSheetPage({ data }: FrontSheetProps) {
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
    if (!data.notes) return <span></span>;

    return data.notes.split("\n").map((line, i) => (
      <p key={i} className="mb-2 last:mb-0">{line}</p>
    ));
  };

  return (
    <div className="p-4 text-black w-[794px] h-[1123px] bg-white font-serif">

      {/* HEADER */}
      <div className="h-[150px] border-b border-black pb-2 mb-2 flex justify-between gap-4">

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
            <span><strong>{te.movement}:</strong> {specie.movement ?? 0}m</span>
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
      <div className="h-[250px] pb-2 mb-2 grid grid-cols-2 gap-4">

        {/* LEFT */}
        <div className="min-h-max">

          {/* HP + ATTRIBUTES */}
          <div className="border border-black h-full p-3">
            <h2 className="font-bold text-2xl mb-2">{te.attributes}</h2>

            <div className="grid grid-cols-2 mb-2 text-xl">
              <div><strong>{te.hp}</strong>: {data.hp}/{data.hp}</div>
              <div><strong>{te.mana}</strong>: {data.mana}/{data.mana}</div>
              <div><strong>{te.defense}</strong>: 1D6+2 </div>
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
        <div className="min-h-max">

          {/* TALENTS + WEALTH */}
          <div className="border border-black h-full p-3">
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
      <div className="h-[250px] pb-2 mb-2 border border-black p-3">
        <h2 className="font-bold text-2xl mb-4">{te.equipament.title}</h2>

        <div className="space-y-3 text-lg">

          <div className="flex items-center gap-2">
            <span className="font-semibold">{te.equipament.rightHand}</span>
            <div className="flex-1 border-b border-black dashed h-5"></div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">{te.equipament.leftHand}</span>
            <div className="flex-1 border-b border-black dashed h-5"></div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">{te.equipament.ranged}</span>
            <div className="flex-1 border-b border-black dashed h-5"></div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">{te.equipament.armor}</span>
            <div className="flex-1 border-b border-black dashed h-5"></div>
          </div>

        </div>
      </div>

      {/* EQUIPMENT FULL WIDTH */}
      <div className="h-[240px] pb-2 mb-2 border border-black p-3">
        <h2 className="font-bold text-2xl mb-2">{te.backpack}</h2>

        <div className="grid grid-cols-3 gap-1">
          {data.equipment.map((e, i) => (
            <div key={i}>+ {e}</div>
          ))}
        </div>
      </div>

      {/* NOTES */}
      <div className="h-[180px] border border-black p-3">
        <h2 className="font-bold text-2xl mb-2">{te.notes}</h2>

        <div className="leading-relaxed break-all">
          {renderNotes()}
        </div>
      </div>
    </div>
  );
}