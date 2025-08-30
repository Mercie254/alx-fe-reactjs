import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component with heading", () => {
  render(<App />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});
