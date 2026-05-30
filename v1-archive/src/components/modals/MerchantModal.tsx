'use client';

interface MerchantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSuccess: boolean;
}

export default function MerchantModal({
  isOpen,
  onClose,
  onSubmit,
  isSuccess,
}: MerchantModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md transition-opacity duration-300">
      <div className="glass-surface p-8 md:p-10 rounded-2xl max-w-md w-full border border-primary/30 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-secondary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">
              storefront
            </span>
          </div>
          <h3 className="font-headline-md text-2xl text-secondary mb-2">
            Activate as a Merchant
          </h3>
          <p className="font-body-sm text-text-muted">
            Apply to list your brand in the DIANA directory and attract ethical, mission-driven spenders.
          </p>
        </div>

        {!isSuccess ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block font-label-caps text-[11px] text-primary uppercase mb-1.5">
                Business Name
              </label>
              <input
                required
                type="text"
                placeholder="Indulge Vegan Pizzeria"
                className="w-full bg-background/50 border border-border-main rounded-md px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors font-body-sm"
              />
            </div>
            <div>
              <label className="block font-label-caps text-[11px] text-primary uppercase mb-1.5">
                Business Type
              </label>
              <select
                required
                className="w-full bg-background/50 border border-border-main rounded-md px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors font-body-sm appearance-none"
              >
                <option value="fnb">Food & Beverage</option>
                <option value="ecommerce">E-Commerce & Retail</option>
                <option value="wellness">Wellness & Fitness</option>
                <option value="travel">Travel & Hospitality</option>
                <option value="other">Other Ethical Services</option>
              </select>
            </div>
            <div>
              <label className="block font-label-caps text-[11px] text-primary uppercase mb-1.5">
                Contact Email
              </label>
              <input
                required
                type="email"
                placeholder="hello@indulge.ph"
                className="w-full bg-background/50 border border-border-main rounded-md px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors font-body-sm"
              />
            </div>
            <div className="flex items-center gap-2 pt-2">
              <input
                required
                type="checkbox"
                id="pledge"
                className="rounded bg-background/50 border-border-main text-primary focus:ring-0 focus:ring-offset-0"
              />
              <label
                htmlFor="pledge"
                className="font-body-sm text-xs text-text-muted select-none"
              >
                We commit to the Integrity Pledge.
              </label>
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
              verified
            </span>
            <h4 className="font-headline-md text-xl text-secondary mb-2">
              Pledge Received!
            </h4>
            <p className="font-body-sm text-text-muted">
              Your Merchant profile request has been sent for verification. We are thrilled to welcome you to the network!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
