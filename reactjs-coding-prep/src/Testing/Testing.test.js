import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('submits the form and shows greeting with username only', async () => {
    render(<LoginForm />);
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Simulate user typing
    await userEvent.type(usernameInput, 'Harish');
    await userEvent.type(passwordInput, 'secret123');

    // Submit the form
    await userEvent.click(submitButton);

    // Only username should appear in greeting
    expect(screen.getByText('Hello, Harish!')).toBeInTheDocument();

    // Password should NOT appear anywhere
    expect(screen.queryByText(/secret123/)).not.toBeInTheDocument();
  });
});
