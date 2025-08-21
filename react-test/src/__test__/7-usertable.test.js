import { render, screen } from "@testing-library/react";
import UserTable from "../components/7-UserTable/UserTable";
import data from "./7-data.json";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("UserTable Component", () => {
  test("fetches and displays users in a table", async () => {
    fetch.mockResponseOnce(JSON.stringify(data));
    render(<UserTable />);
    const rows = await screen.findAllByTestId("user-row");
    expect(rows).toHaveLength(data.length);

    expect(await screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(await screen.getByText("Sincere@april.biz")).toBeInTheDocument();
    expect(await screen.getByText("1")).toBeInTheDocument();
    expect(await screen.getByText("1-770-736-8031 x56442")).toBeInTheDocument();
  });
});
