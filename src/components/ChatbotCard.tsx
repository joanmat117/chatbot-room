import { Link } from 'react-router-dom';

// Definimos las propiedades que recibirá nuestra tarjeta
interface ChatbotCardProps {
  iconName: string;         // El nombre del icono de Remix Icon (ej: "ri-robot-2-line")
  title: string;
  description: string;
  linkTo: string;           // La ruta a la que navegará (ej: "/chat/creative")
  gradientColor: string;    // Las clases de Tailwind para el gradiente (ej: "from-blue-500 to-cyan-400")
}

export const ChatbotCard: React.FC<ChatbotCardProps> = ({ iconName, title, description, linkTo, gradientColor }) => {
  return (
    // Usamos Link de react-router-dom para que toda la tarjeta sea un enlace
    <Link 
      to={linkTo} 
      className={`
        block p-8 rounded-2xl text-white shadow-lg 
        bg-gradient-to-br ${gradientColor}
        transform hover:-translate-y-2 hover:shadow-2xl 
        transition-all duration-300 ease-in-out cursor-pointer
      `}
    >
      <div className="flex flex-col h-full">
        {/* Icono */}
        <i className={`${iconName} text-5xl mb-4 opacity-80`}></i>
        
        {/* Título */}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        
        {/* Descripción */}
        <p className="font-light text-base flex-grow">{description}</p>
        
        {/* "Call to action" al final */}
        <div className="mt-6 font-semibold flex items-center">
          Iniciar Chat <i className="ri-arrow-right-line ml-2"></i>
        </div>
      </div>
    </Link>
  );
};