import React, { useState } from 'react';
import { GlassCard, GoldButton } from '../components/GlassCard';
import { 
  MapPin, 
  CreditCard, 
  DollarSign, 
  Download, 
  Gift, 
  CheckCircle2,
  Navigation,
  Car
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PassengerTrackingWeb = () => {
  const [step, setStep] = useState<'destination' | 'payment' | 'tracking'>('destination');
  const [destination, setDestination] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentSecured, setPaymentSecured] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  const pickupLocation = "The Grand Majestic Hotel";
  const estimatedFare = destination ? "$48.50" : "--";

  const handleDestinationSubmit = () => {
    if (destination.length > 3) setStep('payment');
  };

  const handlePaymentSelection = (method: string) => {
    setPaymentMethod(method);
    setPaymentSecured(true);
    setTimeout(() => setShowPromo(true), 800);
    setStep('tracking');
  };

  return (
    <div className="min-h-screen bg-black p-4 font-sans text-white">
      <div className="max-w-md mx-auto space-y-6 pt-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black tracking-tight mb-2">TUXEDO RIDE TRACKING</h1>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-bold">
            <Navigation className="w-4 h-4 animate-pulse" />
            CHAUFFEUR EN ROUTE
          </div>
        </div>

        {step === 'destination' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Where are you heading?</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-500 uppercase font-bold">Pickup</p>
                  <p className="text-base text-gray-300">{pickupLocation}</p>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter Drop-off Location"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-black/50 border-2 border-[#D4AF37]/30 rounded-xl py-4 pl-12 pr-4 focus:border-[#D4AF37] outline-none transition-all"
                  />
                </div>
                <GoldButton onClick={handleDestinationSubmit} className="w-full py-4 text-lg" disabled={!destination}>
                  Confirm Destination
                </GoldButton>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {step === 'payment' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <GlassCard className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm font-medium">Estimated Fare</p>
                <p className="text-5xl font-black text-[#D4AF37]">{estimatedFare}</p>
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-sm text-center">Select Payment</h3>
              <div className="grid grid-cols-1 gap-3">
                {['card', 'apple', 'paypal', 'cash'].map((id) => (
                  <button
                    key={id}
                    onClick={() => handlePaymentSelection(id)}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#D4AF37] transition-all"
                  >
                    <CreditCard className="text-[#D4AF37] w-6 h-6" />
                    <span className="font-bold capitalize">{id} Pay</span>
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}

        {step === 'tracking' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <GlassCard className="p-6 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed</h2>
              <p className="text-gray-400 mb-6">Your chauffeur Michael is 4 mins away.</p>
              <AnimatePresence>
                {showPromo && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-4 p-4 bg-[#D4AF37]/10 border-2 border-dashed border-[#D4AF37]/40 rounded-xl"
                  >
                    <Gift className="w-5 h-5 inline mr-2 text-[#D4AF37]" />
                    <span className="text-[#D4AF37] font-bold">20% off your next luxury ride!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        )}

        <div className="mt-auto pt-10">
          <div className="flex items-center justify-between p-4 bg-white/5 border-t border-white/10 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <Car className="text-black w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Experience Tuxedo App</p>
                <p className="text-[10px] text-gray-500">Faster bookings & history</p>
              </div>
            </div>
            <button className="bg-[#D4AF37] text-black text-xs font-black px-3 py-2 rounded-lg">GET</button>
          </div>
        </div>
      </div>
    </div>
  );
};