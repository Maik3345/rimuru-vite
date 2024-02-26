import { FC } from "react";

export const UncheckedPrimary = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#D0D5DD" />
    </svg>
  );
};

export const UncheckedSecondary = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#C2B0FF" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#6821D9" />
    </svg>
  );
};

export const UncheckedBordered = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3281_386562)">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="white" />
        <rect
          x="4.5"
          y="4.5"
          width="15"
          height="15"
          rx="3.5"
          stroke="#9268FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3281_386562"
          x="0"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_3281_386562"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.956863 0 0 0 0 0.921569 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3281_386562"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3281_386562"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const UncheckedDisabled = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#F2F4F7" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#D0D5DD" />
    </svg>
  );
};

export const CheckedPrimary = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#DED6FF" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#6821D9" />
      <path
        d="M12 5L6.5 10.5L4 8"
        stroke="#6821D9"
        stroke-width="1.6666"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CheckedSecondary = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#C2B0FF" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#6821D9" />
      <path
        d="M12 5L6.5 10.5L4 8"
        stroke="#6821D9"
        stroke-width="1.6666"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CheckedBordered = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3281_386327)">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="#DED6FF" />
        <rect
          x="4.5"
          y="4.5"
          width="15"
          height="15"
          rx="3.5"
          stroke="#6821D9"
        />
        <path
          d="M16 9L10.5 14.5L8 12"
          stroke="#6821D9"
          stroke-width="1.6666"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3281_386327"
          x="0"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_3281_386327"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.956863 0 0 0 0 0.921569 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3281_386327"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3281_386327"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const CheckedDisabled = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#F2F4F7" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#D0D5DD" />
      <path
        d="M12 5L6.5 10.5L4 8"
        stroke="#D0D5DD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export type CheckboxVariantType =
  | "primary"
  | "secondary"
  | "bordered"
  | "disabled";

export const checked: { [key in CheckboxVariantType]: FC } = {
  primary: CheckedPrimary,
  secondary: CheckedSecondary,
  bordered: CheckedBordered,
  disabled: CheckedDisabled,
};

export const unchecked: { [key in CheckboxVariantType]: FC } = {
  primary: UncheckedPrimary,
  secondary: UncheckedSecondary,
  bordered: UncheckedBordered,
  disabled: UncheckedDisabled,
};
