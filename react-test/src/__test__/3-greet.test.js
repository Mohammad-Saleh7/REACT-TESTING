import { render, screen } from "@testing-library/react";
import Greet from "../components/3-Greet/Greet";

describe("Greet", () => {
  //SHOULD BE ERROR
  test("should failed(error) ", () => {
    render(<Greet />);
    const el = screen.getByText("hello ");
    expect(el).toBeInTheDocument();
  });

  test("should passed", () => {
    render(<Greet name={"Mohammad Saleh"} />);

    const el = screen.getByText("hello Mohammad Saleh");
    expect(el).toBeInTheDocument();
  });
});
