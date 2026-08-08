import "./scientific-text.css";

const formulas: Record<string, { base: string; subscript: string; spoken: string }> = {
  "PM2.5": { base: "PM", subscript: "2.5", spoken: "PM 2.5" },
  PM10: { base: "PM", subscript: "10", spoken: "PM 10" },
  O3: { base: "O", subscript: "3", spoken: "ozone" },
  NO2: { base: "NO", subscript: "2", spoken: "nitrogen dioxide" },
  SO2: { base: "SO", subscript: "2", spoken: "sulfur dioxide" },
  CO2: { base: "CO", subscript: "2", spoken: "carbon dioxide" },
  CH4: { base: "CH", subscript: "4", spoken: "methane" },
  H2O: { base: "H", subscript: "2", spoken: "water" },
  NH3: { base: "NH", subscript: "3", spoken: "ammonia" },
  N2O: { base: "N", subscript: "2", spoken: "nitrous oxide" },
  NOx: { base: "NO", subscript: "x", spoken: "nitrogen oxides" },
};

const formulaPattern = /(PM2\.5|PM10|NO2|SO2|CO2|CH4|H2O|NH3|N2O|NOx|O3)/g;

export function ScientificText({ text }: { text: string }) {
  return <>{text.split(formulaPattern).map((part, index) => {
    const formula = formulas[part];
    if (!formula) return part;

    return (
      <span className="scientific-formula" aria-label={formula.spoken} key={`${part}-${index}`}>
        <span aria-hidden="true">{formula.base}<sub>{formula.subscript}</sub></span>
      </span>
    );
  })}</>;
}

