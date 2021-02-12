import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const formHeader = screen.getByText(/checkout form/i);
  console.log(formHeader);
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstInput = screen.getByLabelText(/first/i);
  const lastInput = screen.getByLabelText(/last/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const submitBtn = screen.getByRole('button');

  userEvent.type(firstInput, "Samuel");
  userEvent.type(lastInput, "Perrin");
  userEvent.type(addressInput, "1234 Main St.");
  userEvent.type(cityInput, "Fargo");
  userEvent.type(stateInput, "ND");
  userEvent.type(zipInput, "12345");

  expect(screen.queryByTestId("successMessage")).toBeNull();
  
  userEvent.click(submitBtn);
  
  expect(screen.queryByTestId("successMessage")).toBeInTheDocument();
});
