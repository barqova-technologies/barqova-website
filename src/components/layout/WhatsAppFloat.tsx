import { siteConfig } from "@/lib/metadata";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.03 5.33C9.96 5.33 5.05 10.24 5.05 16.31c0 1.93.51 3.81 1.47 5.46L5 27.07l5.45-1.43a10.93 10.93 0 0 0 5.59 1.53h.01c6.07 0 10.98-4.91 10.98-10.98 0-2.93-1.14-5.69-3.21-7.76a10.92 10.92 0 0 0-7.79-3.1zm0 19.99h-.01a9.05 9.05 0 0 1-4.62-1.27l-.33-.2-3.43.9.92-3.34-.22-.34a9.04 9.04 0 0 1-1.39-4.83c0-5 4.07-9.07 9.07-9.07 2.42 0 4.7.94 6.41 2.66a9.06 9.06 0 0 1 2.66 6.42c0 5.01-4.07 9.07-9.07 9.07z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Barqova on WhatsApp at ${siteConfig.phoneDisplay}`}
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_14px_36px_-6px_rgba(37,211,102,0.85)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
