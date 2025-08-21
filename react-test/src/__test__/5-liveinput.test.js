import { render, screen, fireEvent } from "@testing-library/react";
import LiveInput from "../components/5-LiveInput/LiveInput";

describe("liveInput", () => {
  test("should get placeholder with this text ", () => {
    render(<LiveInput />);
    const placeHolder = screen.getByPlaceholderText("Enter a text");
    expect(placeHolder).toBeInTheDocument();
  });

  test("should get heading ", () => {
    render(<LiveInput />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should h2 element displays the entered text", () => {
    render(<LiveInput />);
    const input = screen.getByRole("input");
    const heading = screen.getByRole("heading");
    fireEvent.change(input, { target: { value: "Hello APS" } });
    expect(heading).toHaveTextContent("Hello APS");
  });
});
