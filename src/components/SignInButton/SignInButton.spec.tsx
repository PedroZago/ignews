import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { SignInButton } from '.';

jest.mock('next-auth/react');

describe('SignInButton component', () => {
  it('should be rendered correctly when user is not authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({ data: null, status: 'loading' })

    render(
      <SignInButton />
    )

    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
  })

  it('should be rendered correctly when user is authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: 'John Doe', email: 'john.doe@example.com', image: ""
        },
        expires: 'fake-expires'
      },
      status: 'authenticated'
    })

    render(
      <SignInButton />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})