// src/components/messages/UserMessage.tsx
import type { ReactNode } from 'react';

/**
 * Muestra un mensaje enviado por el usuario.
 * Diseño limpio alineado a la derecha.
 */
export function UserMessage({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end w-full">
      <div className="max-w-[90%] md:max-w-2xl w-fit flex justify-end gap-3 bg-secondary-200 text-secondary-800 p-4 rounded-2xl rounded-br-sm text-md border border-secondary-300 prose prose-sm prose-invert">
            {children}
      </div>
    </div>
  );
}