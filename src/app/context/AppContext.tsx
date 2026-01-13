// app/context/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Ride, Commission } from '../types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  rides: Ride[];
  setRides: (rides: Ride[]) => void;
  activeRide: Ride | null;
  setActiveRide: (ride: Ride | null) => void;
  commissions: Commission[];
  setCommissions: (commissions: Commission[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [rides, setRides] = useState<Ride[]>([]);
  const [activeRide, setActiveRide] = useState<Ride | null>(null);
  const [commissions, setCommissions] = useState<Commission[]>([]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        rides,
        setRides,
        activeRide,
        setActiveRide,
        commissions,
        setCommissions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};