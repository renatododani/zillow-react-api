import React from "react";

export function SearchByStates(props: { onSelect: (state: string) => void }) {
  const [states] = React.useState([
    { value: "AK", name: "Alaska" },
    { value: "TX", name: "Texas" },
    { value: "AL", name: "Alabama" },
    { value: "AR", name: "Arkansas" },
    { value: "AZ", name: "Arizona" },
    { value: "CA", name: "California" },
    { value: "CO", name: "Colorado" },
    { value: "CT", name: "Connecticut" },
    { value: "DC", name: "DistrictofColumbia" },
    { value: "DE", name: "Delaware" },
    { value: "FL", name: "Florida" },
    { value: "GA", name: "Georgia" },
    { value: "HI", name: "Hawaii" },
    { value: "IA", name: "Iowa" },
    { value: "ID", name: "Idaho" },
    { value: "IL", name: "Illinois" },
    { value: "IN", name: "Indiana" },
    { value: "KS", name: "Kansas" },
    { value: "KY", name: "Kentucky" },
    { value: "LA", name: "Louisiana" },
    { value: "MA", name: "Massachusetts" },
    { value: "MD", name: "Maryland" },
    { value: "ME", name: "Maine" },
    { value: "MI", name: "Michigan" },
    { value: "MN", name: "Minnesota" },
    { value: "MO", name: "Missouri" },
    { value: "MS", name: "Mississippi" },
    { value: "MT", name: "Montana" },
    { value: "NC", name: "NorthCarolina" },
    { value: "ND", name: "NorthDakota" },
    { value: "NE", name: "Nebraska" },
    { value: "NH", name: "NewHampshire" },
    { value: "NJ", name: "NewJersey" },
    { value: "NM", name: "NewMexico" },
    { value: "NV", name: "Nevada" },
    { value: "NY", name: "NewYork" },
    { value: "OH", name: "Ohio" },
    { value: "OK", name: "Oklahoma" },
    { value: "OR", name: "Oregon" },
    { value: "PA", name: "Pennsylvania" },
    { value: "RI", name: "RhodeIsland" },
    { value: "SC", name: "SouthCarolina" },
    { value: "SD", name: "SouthDakota" },
    { value: "TN", name: "Tennessee" },
    { value: "TX", name: "Texas" },
    { value: "UT", name: "Utah" },
    { value: "VA", name: "Virginia" },
    { value: "VT", name: "Vermont" },
    { value: "WA", name: "Washington" },
    { value: "WI", name: "Wisconsin" },
    { value: "WV", name: "WestVirginia" },
    { value: "WY", name: "Wyoming" },
  ]);
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Property</h2>
        </label>
        <select
          onChange={(e) => {
            props.onSelect(e.target.value);
          }}
        >
          {states.map((p) => (
            <option value={p.value}>{p.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
