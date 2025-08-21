import { render, screen } from "@testing-library/react";
import Text from "../components/1-Text/Text";

describe("test", () => {
  test("text component", () => {
    render(<Text />);
    const p = screen.getByText("Welcome To APS");
    expect(p).toBeInTheDocument();
  });

  test("should render heading", () => {
    render(<Text headingText={"Hello APS"} />);
    const h = screen.getByRole("heading");
    expect(h).toHaveTextContent("Hello APS");
  });
});
