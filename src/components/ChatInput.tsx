// src/components/ChatInput.tsx
export function ChatInput() {
  return (
    <div className="bg-white p-4">
      <div className="relative">
        <textarea
          placeholder="Escribe tu mensaje o arrastra un archivo..."
          className="w-full h-14 pr-20 p-4 border border-slate-300 rounded-xl resize-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition"
          rows={1}
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors disabled:bg-slate-300">
          <i className="ri-send-plane-fill"></i>
        </button>
      </div>
      <p className="text-xs text-slate-500 text-center mt-2">
        ChatVerse puede cometer errores. Considera verificar la información importante.
      </p>
    </div>
  );
}