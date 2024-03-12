import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from ".";
import "@testing-library/jest-dom/vitest";

describe("Checkbox component", () => {
  it("Should render primary variant by default", () => {
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("UncheckedPrimary");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("Should change checked state when clic", () => {
    const { getByRole } = render(<Checkbox />);
    const checkbox = getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("Shoud render secondary variant using boolean notation", () => {
    const { getByTestId } = render(<Checkbox secondary />);
    const checkbox = getByTestId("UncheckedSecondary");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("Shoud render bordered variant using variation notation", () => {
    const { getByTestId } = render(<Checkbox variant="bordered" />);
    const checkbox = getByTestId("UncheckedBordered");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("Shoud render disabled variant instead of bordered because of priority", () => {
    const { getByTestId } = render(<Checkbox variant="disabled" bordered />);
    const checkbox = getByTestId("UncheckedDisabled");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
});
