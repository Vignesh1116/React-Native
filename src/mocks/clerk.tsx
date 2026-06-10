import React from 'react';
import { create } from 'zustand';

interface AuthState {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isSignedIn: true, // start signed in so they see the app immediately, but they can sign out
  signIn: () => set({ isSignedIn: true }),
  signOut: () => set({ isSignedIn: false }),
}));

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const useAuth = (): any => {
  const { isSignedIn, signOut } = useAuthStore();
  return {
    isLoaded: true,
    isSignedIn,
    userId: isSignedIn ? 'user_123' : null,
    sessionId: isSignedIn ? 'session_123' : null,
    getToken: async () => (isSignedIn ? 'mock-token' : null),
    signOut: async () => signOut(),
  };
};

export const useUser = (): any => {
  const { isSignedIn } = useAuthStore();
  return {
    isLoaded: true,
    isSignedIn,
    user: isSignedIn ? {
      id: 'user_123',
      fullName: 'John Doe',
      firstName: 'John',
      lastName: 'Doe',
      primaryEmailAddress: {
        emailAddress: 'john@example.com',
      },
      emailAddresses: [{ emailAddress: 'john@example.com' }],
      imageUrl: 'https://i.pravatar.cc/150?u=john',
      createdAt: new Date(),
    } : null,
  };
};

export const useSignIn = (): any => {
  const { signIn } = useAuthStore();
  return {
    isLoaded: true,
    fetchStatus: 'idle',
    errors: { fields: {} },
    signIn: {
      status: 'complete',
      create: async () => ({ status: 'complete' }),
      password: async () => ({}), // Mock password login
      finalize: async ({ navigate }: any) => { 
        signIn(); 
        if (navigate) navigate({ decorateUrl: (url: string) => url });
      },
      reset: () => {},
      mfa: {
        sendEmailCode: async () => {},
        verifyEmailCode: async () => {},
      },
    },
    setActive: async () => { signIn(); },
  };
};

export const useSignUp = (): any => {
  const { signIn } = useAuthStore();
  return {
    isLoaded: true,
    fetchStatus: 'idle',
    errors: { fields: {} },
    signUp: {
      status: 'complete',
      create: async () => ({ status: 'complete' }),
      password: async () => ({}), // Mock password signup
      finalize: async ({ navigate }: any) => { 
        signIn(); 
        if (navigate) navigate({ decorateUrl: (url: string) => url });
      },
      unverifiedFields: [],
      missingFields: [],
      verifications: {
        emailAddress: { status: 'verified' },
        sendEmailCode: async () => {},
        verifyEmailCode: async () => ({ status: 'complete' }),
      },
    },
    setActive: async () => { signIn(); },
  };
};

export const useClerk = (): any => {
  const { signOut } = useAuthStore();
  return {
    signOut: async () => { signOut(); },
  };
};
