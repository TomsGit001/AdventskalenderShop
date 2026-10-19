import { CTA_LABEL } from "@/lib/config";

export default function CtaButton({
  label = CTA_LABEL,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <form action="/api/checkout" method="POST" className="w-full sm:w-auto">
      <button type="submit" className={`btn-cta ${className}`}>
        <span aria-hidden>🎁</span>
        {label}
      </button>
    </form>
  );
}

