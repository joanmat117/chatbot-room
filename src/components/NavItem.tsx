// src/components/NavItem.tsx
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  icon?:string;
  className?:string;
};

export function NavItem({className,icon = "close", to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      // NavLink permite una función en className para aplicar estilos según el estado 'isActive'
      className={({ isActive }) =>`relative text-gray-700 hover:text-secondary-700 py-2 px-2 shadow active:scale-95 hover:scale-95 transition rounded-2xl ${
          isActive && 'bg-secondary-500 text-white hover:text-white '} ${className}`}
    >
        <i className={`ri-${icon} mr-1`}></i>
      <span>{children}</span>
    </NavLink>
  );
}