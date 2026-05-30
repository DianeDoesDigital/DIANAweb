'use client';

interface AdvocateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSuccess: boolean;
}

export default function AdvocateModal({
  isOpen,
  onClose,
  onSubmit,
  isSuccess,
}: AdvocateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md transition-opacity duration-300">
      <div className="glass-surface p-8 md:p-10 rounded-2xl max-w-md w-full border border-primary/30 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-subtle hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">
              shield_person
            </span>
          </div>
          <h3 className="font-headline-md text-2xl text-secondary mb-2">
            Join as an Advocate
          </h3>
          <p className="font-body-sm text-text-muted">
            Enter your details to join the global waitlist and help save animal sanctuaries automatically.
          </p>
        </div>
        
        {!isSuccess ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block font-label-caps text-[11px] text-primary uppercase mb-1.5">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Diana Mejilla"
                className="w-full bg-background/50 border border-border-main rounded-md px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors font-body-sm"
              />
            </div>
            <div>
              <label className="block font-label-caps text-[11px] text-primary uppercase mb-1.5">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="diana@dianafortheanimals.org"
                className="w-full bg-background/50 border border-border-main rounded-md px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors font-body-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-label-caps py-4 rounded-md hover:brightness-110 active:scale-95 transition-all neon-border uppercase tracking-widest"
            >
              ACTIVATE
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <span className="material-symbols-outlined text-success text-5xl mb-4">
              check_circle
            </span>
            <h4 className="font-headline-md text-xl text-secondary mb-2">
              You're on the list!
            </h4>
            <p className="font-body-sm text-text-muted">
              Thank you for committing to animal protection. We'll send your onboarding package shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
