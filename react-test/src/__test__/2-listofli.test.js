import { render, screen } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";
("../components/2-ListOfLi/ListOfLi");

describe("listOfLi", () => {
  test("renders correct number of <li> elements for given usernames", () => {
    const userName = ["john", "sam", "jasem", "tom"];
    render(<ListOfLi usernames={userName} />);
    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(4);
  });
});
