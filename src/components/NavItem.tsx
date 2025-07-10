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
      className={({ isActive }) =>`relative  py-2 px-2 shadow active:scale-95 hover:scale-95 transition rounded-2xl ${className} ${
          isActive ? 'bg-secondary-500 text-white': 'bg-slate-50 text-gray-700 hover:text-secondary-700'}`}
    >
        <i className={`ri-${icon} mr-1`}></i>
      <span>{children}</span>
    </NavLink>
  );
}