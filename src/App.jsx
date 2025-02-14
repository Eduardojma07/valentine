import { useState } from "react";
import lovesvg from "./assets/panda1.gif";
import lovesvg2 from "./assets/panda-70.gif";
import cartaImagen from "./assets/carta.png";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "¿De verdad estás segura?",
      "¡Piénsalo eh!",
      "¡Última oportunidad!",
      "¿Segura que no???",
      "¡Te arrepentirás!",
      "¡Piensalo más!",
      "¿Estás muy segura?",
      "¡Esto podría ser un error!",
      "¡Piensalo bien por favor!",
      "¡No seas así:((!",
      "¿Sí, no?",
      "No???",
      "¿Es tu respuesta final?",
      "Lloro eh :(",
      "Me voy a miar!",
      "Alejandra!! di que si:(",
      "SI?????",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen text-zinc-900">
      {yesPressed ? (
        openLetter ? (
          // 💌 Sección de la carta con imagen de fondo y texto sobre ella
          <div className="relative flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold my-4 bg-white inline-block">
              Para Alejandra ❤️
            </h1>

            <div className="relative w-[350px] md:w-[500px]">
              {/* Imagen de fondo de la carta */}
              <img
                src="https://thumb.ac-illust.com/99/99e7211f38d2a9a974e6e87aa0edff39_t.jpeg"
                alt="Carta de amor"
                className="w-full rounded-lg shadow-lg"
              />

              {/* Texto sobre la imagen */}
<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-lg text-center text-red-700 font-semibold 
              max-w-[60%] md:max-w-[70%] leading-snug drop-shadow-lg px-4">
  Mi niña preciosa, quiero que sepas  
  que eres lo mejor que me ha pasado. 💖   
  Gracias por estar conmigo  
  y hacerme tan feliz.  

  Eres mi persona especial,  
  mi alegría y mi todo.    
 
  
    ¡Tiamo muchisimo, vamos por otro año y más! Muak!!❤️  
</p>
            </div>

            <button
              onClick={() => setOpenLetter(false)}
              className="mt-6 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        ) : (
          // 🎉 Segunda etapa después del "Sí"
          <>
            <img src="https://media1.tenor.com/images/ce266b4e172067d98236a32b56dfcabc/tenor.gif?itemid=17524251" />
            <div className="text-4xl md:text-6xl font-bold my-4 bg-white inline-block">
              Más te vale mi amor!!!
            </div>

            {/* Botón para abrir la carta */}
            <div className="flex flex-col items-center mt-6">
              <button
                onClick={() => setOpenLetter(true)}
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                <img src={cartaImagen} alt="Abrir" className="w-6 h-6 mr-2" />
                Abrir
              </button>
            </div>
          </>
        )
      ) : (
        // 🥰 Primera pantalla: "¿Quieres ser mi San Valentín?"
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://i.pinimg.com/originals/9b/f6/44/9bf6447f56988ed205d1c6c05d18b4ca.gif"
          />

          <h1 className="text-4xl md:text-6xl my-4 bg-white text-center">
            ¿Quieres ser mi San Valentín?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sí
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      target="__blank"
    >
      hecho por{" tunovio "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
