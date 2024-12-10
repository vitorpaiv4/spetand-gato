import { HomeIcon, StarIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-white flex flex-col items-center border-b border-gray-200">
      {/* Top Section */}
      <div className="flex w-full justify-between items-center max-w-[1024px] px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/logo.jpg" alt="Espetaria Logo" width={80} height={80} />
          <div className="ml-3 text-gray-800">
            <h1 className="text-lg font-bold">Spetand’up Do Gato</h1>
            <p className="text-sm">Rua Exemplo, 123 - Cidade</p>
          </div>
        </div>

        {/* Login Button */}
        <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700">
          Entrar
        </button>
      </div>

      {/* Navigation Section */}
      <nav className="w-full bg-white flex justify-center items-center space-x-0 py-2 border-t border-gray-200">
        <a
          href="#cardapio"
          className="flex items-center bg-yellow-600 text-white w-1/3 h-12 justify-center hover:bg-yellow-700"
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs ml-2">Cardápio</span>
        </a>
        <a
          href="#avaliacoes"
          className="flex items-center bg-yellow-600 text-white w-1/3 h-12 justify-center hover:bg-yellow-700"
        >
          <StarIcon className="h-6 w-6" />
          <span className="text-xs ml-2">Avaliações</span>
        </a>
        <a
          href="#contato"
          className="flex items-center bg-yellow-600 text-white w-1/3 h-12 justify-center hover:bg-yellow-700"
        >
          <PhoneIcon className="h-6 w-6" />
          <span className="text-xs ml-2">Contato</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
