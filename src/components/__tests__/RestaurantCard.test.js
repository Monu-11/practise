import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resDataMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Falahaar");

  expect(name).toBeInTheDocument();
});
