import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/4-Login/Login";

describe("Login", () => {
  test("should be in the document", () => {
    render(<Login />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("should to have login", () => {
    render(<Login />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("login");
  });
  test("should text changes to logout", () => {
    render(<Login />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(btn.textContent).toBe("logout");
  });
});
