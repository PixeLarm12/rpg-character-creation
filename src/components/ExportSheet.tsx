type ExportSheetProps = {
  data: {
    name: string;
    attributes: Record<string, number>;
    positiveTalents: any[];
    negativeTalents: any[];
    equipment: string[];
  };
};

export function ExportSheet({ data }: ExportSheetProps) {
  return (
    <div className="p-8 bg-white text-black w-[794px] min-h-[1123px]">
      {/* A4 proporcional */}

      <h1 className="text-2xl font-bold mb-4">{data.name}</h1>

      <h2 className="font-bold mt-4">Attributes</h2>
      {Object.entries(data.attributes).map(([k, v]) => (
        <div key={k}>
          {k}: {v}
        </div>
      ))}

      <h2 className="font-bold mt-4">Talents</h2>
      {data.positiveTalents.map((t) => (
        <div key={t.id}>+ {t.name}</div>
      ))}
      {data.negativeTalents.map((t) => (
        <div key={t.id}>- {t.name}</div>
      ))}

      <h2 className="font-bold mt-4">Equipment</h2>
      {data.equipment.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}