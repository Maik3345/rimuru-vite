import React, { FC, createElement, useEffect, useState } from "react";
import { CheckboxVariantType, checked, unchecked } from "./icons";

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** If it is true, variant will be primary */
  primary?: boolean;
  /** If it is true, variant will be secondary */
  secondary?: boolean;
  /** If it is true, variant will be bordered */
  bordered?: boolean;
  /** If it is true, variant will be unabled */
  unabled?: boolean;
  /** You can select directly the variant of checkbox */
  variant?: CheckboxVariantType;
}

export const Checkbox: FC<CheckboxProps> = ({
  primary,
  secondary,
  bordered,
  disabled,
  variant,
  ...checkboxProps
}) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(
    checkboxProps.checked
  );

  const calculatedVariant: CheckboxVariantType = variant
    ? variant
    : primary
    ? "primary"
    : secondary
    ? "secondary"
    : bordered
    ? "bordered"
    : disabled
    ? "disabled"
    : "primary";

  const itIsDisabled = calculatedVariant === "disabled";

  useEffect(() => {
    if (itIsDisabled) return;

    setCheckboxIsChecked(checkboxProps.checked);
  }, [checkboxProps.checked]);

  return (
    <>
      <input
        style={{
          width: 0,
          height: 0,
          position: "absolute",
        }}
        {...checkboxProps}
        type="checkbox"
      />
      <span
        onClick={() => !itIsDisabled && setCheckboxIsChecked((curr) => !curr)}
        {...{ variant }}
      >
        {createElement(
          checkboxIsChecked
            ? checked[calculatedVariant]
            : unchecked[calculatedVariant]
        )}
      </span>
    </>
  );
};
