import { Button } from '@/components/livekit/button';

function ShoppingBagIcon() {
  return (
    <div className="relative mb-8">
      {/* Animated gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse" />
      </div>
      
      {/* Shopping bag with sparkles */}
      <div className="relative flex items-center justify-center">
        <svg className="h-24 w-24 text-blue-600 drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
        <div className="absolute -bottom-2 -left-2 text-xl animate-bounce" style={{ animationDelay: '0.2s' }}>🛍️</div>
        <div className="absolute top-0 left-10 text-lg animate-bounce" style={{ animationDelay: '0.4s' }}>💳</div>
      </div>
    </div>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12">
        <ShoppingBagIcon />

        {/* Brand header */}
        <div className="mb-6">
          <div className="text-sm uppercase tracking-widest text-blue-600 mb-2 font-semibold">
            🤖 AI-Powered Shopping
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 drop-shadow-sm">
            VoiceShop AI
          </h1>
          <p className="text-xl text-purple-700 font-medium">
            Shop Smarter with Your Voice
          </p>
        </div>

        {/* Value proposition */}
        <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 max-w-2xl mb-8 shadow-xl">
          <div className="flex items-start gap-3 mb-3">
            <MicIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-blue-900 font-semibold mb-2">
                Your Personal Shopping Assistant
              </p>
              <p className="text-blue-700 text-sm leading-relaxed">
                Browse products, check prices, and place orders - all through natural conversation. 
                No typing, no clicking, just tell me what you need and I'll handle the rest!
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="bg-blue-100/80 border-2 border-blue-300 rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-sm font-bold text-blue-900">Smart Search</p>
            <p className="text-xs text-blue-700 mt-1">"Show me hoodies under ₹2000"</p>
          </div>
          
          <div className="bg-purple-100/80 border-2 border-purple-300 rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">🛒</div>
            <p className="text-sm font-bold text-purple-900">Instant Orders</p>
            <p className="text-xs text-purple-700 mt-1">"I'll buy the second one"</p>
          </div>
          
          <div className="bg-pink-100/80 border-2 border-pink-300 rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-sm font-bold text-pink-900">Order Tracking</p>
            <p className="text-xs text-pink-700 mt-1">"What did I just buy?"</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onStartCall} 
            className="w-96 font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/50 border-2 border-white/50 transition-all duration-300 hover:scale-105"
          >
            {startButtonText}
          </Button>
          <p className="text-purple-600 text-xs mt-3 italic font-medium">
            🎤 Just speak naturally - I understand!
          </p>
        </div>

      </section>
    </div>
  );
};