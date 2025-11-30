import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';

describe('Card Components', () => {
  describe('Card', () => {
    it('renders children correctly', () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>
      );
      expect(screen.getByText(/card content/i)).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Card className="custom-card">Content</Card>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('custom-card');
    });

    it('renders with hover effect when variant is elevated', () => {
      const { container } = render(
        <Card variant="elevated">Hover me</Card>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('shadow-lg');
    });
  });

  describe('CardHeader', () => {
    it('renders header content', () => {
      render(
        <CardHeader title="Card Title" />
      );
      expect(screen.getByText(/card title/i)).toBeInTheDocument();
    });
  });

  describe('CardContent', () => {
    it('renders content', () => {
      render(
        <CardContent>
          <p>Card body text</p>
        </CardContent>
      );
      expect(screen.getByText(/card body text/i)).toBeInTheDocument();
    });
  });

  describe('CardFooter', () => {
    it('renders footer content', () => {
      render(
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      );
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
    });
  });

  describe('Full Card Structure', () => {
    it('renders complete card with all sections', () => {
      render(
        <Card>
          <CardHeader title="Title" />
          <CardContent>
            <p>Content text</p>
          </CardContent>
          <CardFooter>
            <button>Submit</button>
          </CardFooter>
        </Card>
      );

      expect(screen.getByText(/title/i)).toBeInTheDocument();
      expect(screen.getByText(/content text/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });
  });
});
