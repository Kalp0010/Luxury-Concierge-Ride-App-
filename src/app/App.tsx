import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Screens
import { LoginScreen } from './screens/LoginScreen';
import { 
  DeviceBindingScreen,
  KYCRequiredScreen,
  KYCPendingScreen,
  GuestDetailsScreen,
  RideConfigScreen,
  ConfirmDispatchScreen,
  QRBookingScreen,
  DriverMatchingScreen,
  DriverETAScreen,
  ActiveRideScreen,
  CashConfirmationScreen,
  RideCompletionScreen,
  CommissionWalletScreen,
  RideHistoryScreen,
  ManagerDashboardScreen,
  ProfileScreen,
  NoDriversScreen,
} from './screens/AllScreens';
import { ConciergeHomeScreen } from './screens/ConciergeHomeScreen';

// Driver Selection Screens
import {
  DriverAssignmentModeScreen,
  DriverListScreen,
  DriverProfileScreen,
  DriverSwipeScreen,
} from './screens/DriverSelectionScreens';
import {
  GuestPreferenceScreen,
  DriverConfirmationScreen,
} from './screens/DriverPreferencesScreens';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="dark min-h-screen bg-black max-w-screen overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/device-binding" element={<DeviceBindingScreen />} />
            <Route path="/kyc-required" element={<KYCRequiredScreen />} />
            <Route path="/kyc-pending" element={<KYCPendingScreen />} />
            <Route path="/home" element={<ConciergeHomeScreen />} />
            <Route path="/guest-details" element={<GuestDetailsScreen />} />
            <Route path="/ride-config" element={<RideConfigScreen />} />
            <Route path="/confirm-dispatch" element={<ConfirmDispatchScreen />} />
            <Route path="/qr-booking" element={<QRBookingScreen />} />
            <Route path="/driver-matching" element={<DriverMatchingScreen />} />
            <Route path="/driver-eta" element={<DriverETAScreen />} />
            <Route path="/active-ride" element={<ActiveRideScreen />} />
            <Route path="/cash-confirmation" element={<CashConfirmationScreen />} />
            <Route path="/ride-completion" element={<RideCompletionScreen />} />
            <Route path="/wallet" element={<CommissionWalletScreen />} />
            <Route path="/history" element={<RideHistoryScreen />} />
            <Route path="/manager" element={<ManagerDashboardScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/no-drivers" element={<NoDriversScreen />} />

            {/* Driver Selection Screens */}
            <Route
              path="/driver-assignment-mode"
              element={<DriverAssignmentModeScreen />}
            />
            <Route path="/driver-list" element={<DriverListScreen />} />
            <Route path="/driver-profile" element={<DriverProfileScreen />} />
            <Route path="/driver-swipe" element={<DriverSwipeScreen />} />

            {/* Driver Preferences Screens */}
            <Route path="/guest-preference" element={<GuestPreferenceScreen />} />
            <Route
              path="/driver-confirmation"
              element={<DriverConfirmationScreen />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}