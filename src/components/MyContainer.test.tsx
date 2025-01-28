import { render, screen } from "@testing-library/react";
import MyContainer from "./MyContainer";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Adjust the path to your i18n configuration

test("renders the front page text", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <MyContainer />
    </I18nextProvider>
  );

  const textElement = screen.getByText(/frontPage/i);
  expect(textElement).toBeInTheDocument();
});
