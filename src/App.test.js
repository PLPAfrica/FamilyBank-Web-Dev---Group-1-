import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Testing our React application", () => {
  it("Fetch posts after login", async () => {
    render(<App />);

    expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
  });
});
