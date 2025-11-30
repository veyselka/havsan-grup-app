import { render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/Input';
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {
  it('renders with label', () => {
    render(<Input label="Email" name="email" />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter email" name="email" />);
    const input = screen.getByPlaceholderText(/enter email/i);
    expect(input).toBeInTheDocument();
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    render(<Input name="test" />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'test value');
    expect(input).toHaveValue('test value');
  });

  it('displays error message when error prop is provided', () => {
    render(<Input name="email" error="Invalid email" />);
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  it('applies error styling when error exists', () => {
    render(<Input name="email" error="Error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-google-red');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled name="test" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('renders with different types', () => {
    const { rerender } = render(<Input type="email" name="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" name="password" label="Password" />);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('is required when required prop is true', () => {
    render(<Input required name="test" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
  });
});
