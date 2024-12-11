const Background = () => {
    return (
      <div className="relative w-full h-screen">
        {/* Imagem de Fundo */}
        <img
          src="./assets/fundo.jpg"
          alt="Fundo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Conteúdo */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Bem-vindo à Espetaria!</h1>
        </div>
      </div>
    );
  };
  
  export default Background;
  