import { render, screen, fireEvent } from "@testing-library/react";
import TodoContainer from "../components/6-TodoApp/TodoContainer";

describe("TodoContainer Integration Tests", () => {
  test("should get one li", () => {
    render(<TodoContainer />);
    const input = screen.getByRole("input");
    const btn = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "APS" } });
    fireEvent.click(btn);
    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(1);
    expect(list[0]).toHaveTextContent("APS");
  });

  test("Should renders multiple <li> when form is submitted multiple times", () => {
    render(<TodoContainer />);
    const input = screen.getByRole("input");
    const btn = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Mohammad" } });
    fireEvent.click(btn);

    fireEvent.change(input, { target: { value: "Saleh" } });
    fireEvent.click(btn);

    fireEvent.change(input, { target: { value: "Abbasi" } });
    fireEvent.click(btn);

    const list = screen.getAllByRole("listitem");

    expect(list).toHaveLength(3);

    expect(list[0].textContent).toBe("Mohammad");
    expect(list[1]).toHaveTextContent("Saleh");
    expect(list[2]).toHaveTextContent("Abbasi");
  });
});
