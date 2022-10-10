import { render, screen } from '@testing-library/react';
import CardUser from './CardUser';

test('renders the component CardUser', async () => {
  const userName = "Thiago Ribas"
  render(<CardUser name={ userName }/>);

  const textElement = screen.getByText(/Report for/);
  expect(textElement).toBeInTheDocument();

  const nameText = screen.getByText(/Thiago Ribas/);
  expect(nameText).toBeInTheDocument();

  const dailyButton = screen.getByRole("button", { name: "Daily" });
  expect(dailyButton).toBeInTheDocument();

  const weeklyButton = screen.getByRole("button", { name: "Weekly" });
  expect(weeklyButton).toBeInTheDocument();

  const monthlyButton = screen.getByRole("button", { name: "Monthly" });
  expect(monthlyButton).toBeInTheDocument();

});
