import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', async () => {
  render(<App />);
  
  const userCard = await screen.findByTestId("card-user")
  expect(userCard).toBeInTheDocument();
  const activiesCards = await screen.findAllByTestId("card-activities")
  expect(activiesCards).toHaveLength(5);
});



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
// expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
// expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
// expect(screen.getByRole("img")).toBeInTheDocument();
