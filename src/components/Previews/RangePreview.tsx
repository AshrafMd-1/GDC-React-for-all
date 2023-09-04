import React from "react";

interface RangePreviewProps {
  kind: string;
  min: number;
  max: number;
  step: number;
  inputValue: string;
  setInputValueUsingECB: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RangePreview = (props: RangePreviewProps) => {
  console.log("RangePreview");
  console.log(props.inputValue);
  return (
      <>
        <input
            className="border-2 mt-2 border-gray-300 bg-white h-10 pl-1 rounded-lg text-m focus:outline-none invalid:border-red-500"
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.inputValue === "" ? props.min : props.inputValue}
            onChange={(e) => props.setInputValueUsingECB(e)}
        />
        <label className="mr-2 font-bold">
          Value : {props.inputValue === "" ? props.min : props.inputValue}
        </label>
      </>
  );
};
