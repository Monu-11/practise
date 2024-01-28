// import { fireEvent, render, screen } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_DATA from "../mocks/mockResListData.json";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// // that is right but not working with babel jest I don't know

// // it("Should render the Body Component with Search", async () => {
// //   await act(async () => {
// //     render(
// //       <BrowserRouter>
// //         <Body />
// //       </BrowserRouter>
// //     );
// //   });

// //   const searchBtn = screen.getByRole("button", { name: "Search" });

// //   const searchInput = screen.getByTestId("searchInput");

// //   fireEvent.change(searchInput, { target: { value: "burger" } });

// //   fireEvent.click(searchBtn);

// //   // screen should load 3 restaurant card

// //   const cards = screen.getAllByTestId("resData");

// //   console.log(cards);

// //   expect(cards.length).toBe(3);
// // });

// it("Should render the Body Component with Search", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const searchBtn = screen.getByRole("button", { name: "Search" });

//   const searchInput = screen.getByPlaceholderText("Search by Name");

//   fireEvent.change(searchInput, { target: { value: "burger" } });

//   fireEvent.click(searchBtn);

//   // screen should load 3 restaurant card

//   const cards = screen.getAllByPlaceholderText("resData");

//   console.log(cards);

//   expect(cards.length).toBe(3);
// });

import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(13);
});
