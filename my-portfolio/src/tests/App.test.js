import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlertProvider } from '../Providers/AlertProvider';
import ThemedApp from '../App';
import { FeatureToggleProvider } from '../Providers/FeatureProvider';
import { BrowserRouter } from 'react-router-dom';
import { LeftComponent } from '../components/Left/LeftComponent';
import { ThemeProvider } from '../Providers/ThemeProvider';
import { RightComponent } from '../components/Right/RightComponent';

const Providers = ({ children }) => {
  return (
    <AlertProvider>
      <FeatureToggleProvider>
        <BrowserRouter>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </FeatureToggleProvider>
    </AlertProvider>
  );
}

describe('App Component', () => {
  it('should render left and right component with navbar', () => {
    render(
      <Providers>
        <ThemedApp />
      </Providers>
    );

    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument();
  });

  it('should contain links', () => {
    render(
      <Providers>
        <ThemedApp />
      </Providers>
    );

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
})

describe('Left Component', () => {
  it('should render profile picture', () => {
    render(
      <Providers>
        <LeftComponent />
      </Providers>
    );
    const profilePicture = screen.getByAltText('Profile picture');
    expect(profilePicture).toBeInTheDocument();
  });

  it('should contain 5 links', () => {
    render(
      <Providers>
        <LeftComponent />
      </Providers>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toEqual(5);
  });
});


describe('Right Component', () => {
  it('should contain 3 links', async () => {
    render(
      <Providers>
        <RightComponent />
      </Providers>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toEqual(3);
  });
});
