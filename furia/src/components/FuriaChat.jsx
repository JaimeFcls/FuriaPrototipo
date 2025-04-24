import { useEffect, useRef, useState } from "react";


import Header from "./header";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import Suggestions from "./Suggestions";


import Fundo from "../assets/fundo.png";

export default function FuriaChat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Fala, torcedor FURIOSO! Sobre o que quer saber hoje?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const imageUrls = [
    "/adidas.png",
    "/cs.webp",
    "/hellmanns.webp",
    "/lenovo.webp",
    "/ps.webp",
    "/redbull.webp"
  ];

  const getBotResponse = (msg) => {
    switch (msg.toLowerCase()) {
      case "jogo":
        return "O próximo jogo da FURIA é na PGL Astana, que começa dia 10 de maio.";
      case "elenco":
        return "O elenco atual da FURIA inclui: KSCERATO, yuurih, molodoy, FalleN e YEKINDAR (stand-in).";
      case "noticias":
        return "As últimas notícias estão no nosso Twitter: https://twitter.com/FURIA 🐾 , mas a mais recente foi o Fallen deixando a posição de AWPER principal para o molodoy, e a entrada do YEKINDAR como substituto no lugar do Skullz, jogando com a FURIA na  PGL Astana, IEM Dallas e BLAST Austin Major 2025";
      default:
        return "Escolha um dos tópicos acima para continuar.";
    }
  };

  const handleSuggestionSelect = (topic) => {
    const newMessages = [...messages, { from: "user", text: topic }];
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(topic);
      setMessages([
        ...newMessages,
        { from: "bot", text: response },
        { from: "bot", text: "Quer saber mais? Escolha um dos tópicos abaixo!" },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="min-h-screen w-full p-4 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0f0f0f',
      }}
    >
      <div className="max-w-xl w-full bg-[#1e1f29]/90 rounded-lg shadow-2xl p-6 backdrop-blur-sm relative z-10 text-white">
        <Header />

        <div className="h-96 overflow-y-auto mb-4 p-4 space-y-2 bg-[#1a1b26] rounded-xl" role="log">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} from={msg.from} text={msg.text} />
          ))}
          {isTyping && <TypingIndicator />}
          {!isTyping && messages[messages.length - 1]?.from === "bot" && (
            <Suggestions onSelect={handleSuggestionSelect} />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl z-0 flex justify-center space-x-20">
        {imageUrls.map((src, idx) => (
          <div key={idx} className="sponsorship__item">
            <img
              alt={`Imagem ${idx + 1}`}
              src={src}
              className="w-auto h-auto max-h-12"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
