import { MessageSquare, Phone } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5535988330353"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      
      {/* Icon overlay details */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white font-sans text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white animate-[bounce_1.5s_infinite] select-none shadow-md">
        1
      </span>

      {/* Ripple ring effect */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-[ping_2s_infinite] opacity-35 -z-10 pointer-events-none" />

      {/* WhatsApp visual icon in svg or matching rounded outline */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.988 4.47-9.988 9.963 0 1.947.56 3.764 1.528 5.304l-1.54 5.632 5.766-1.503a9.98 9.98 0 0 0 4.234 1.034c5.506 0 9.988-4.47 9.988-9.963C22 6.47 17.518 2 12.012 2zm6.07 14.258c-.287.804-1.42 1.458-2.025 1.514-.606.056-1.2.223-3.873-.826-3.418-1.341-5.59-4.81-5.762-5.039-.17-.228-1.39-1.841-1.39-3.513 0-1.672.871-2.484 1.182-2.82.311-.335.68-.418.905-.418s.45.014.646.028c.196.014.462-.07.721.558.26.628.892 2.162.969 2.316.077.154.129.335.026.544-.103.209-.155.335-.311.516s-.321.377-.46.544c-.15.18-.306.377-.13.68.176.303.784 1.288 1.684 2.083.899.795 1.656 1.04 1.961 1.166.306.126.486.105.667-.101.18-.206.775-.898.981-1.206.206-.309.412-.258.696-.154s1.803.847 2.115.998c.311.151.516.223.593.352.077.129.077.747-.21 1.552z" />
      </svg>
    </a>
  );
}
