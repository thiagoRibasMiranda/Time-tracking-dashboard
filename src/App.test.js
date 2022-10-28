import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the landing page and test the functionality', async () => {

  const mockData = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ];

  const user = userEvent

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)
    })
  );

  render(<App />);
  
  const userCard = await screen.findByTestId("card-user");
  expect(userCard).toBeInTheDocument();

  const activiesCards = await screen.findAllByTestId("card-activity");
  expect(activiesCards).toHaveLength(6);

  const lastWeekText = screen.getAllByText(/Last Week/i);
  expect(lastWeekText).toHaveLength(6);

  await user.click(screen.getByRole('button', {name : /daily/i}));
  
  const yesterdayText = screen.getAllByText(/Yesterday/i);
  expect(yesterdayText).toHaveLength(6);

  global.fetch.mockRestore();
});
