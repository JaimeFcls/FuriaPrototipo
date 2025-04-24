export default function MessageBubble({ from, text }) {
    const isBot = from === "bot";
    const logo = isBot ? "/Furia_logo.png" : "/Furia_logo_Inverse.png";  
    const background = isBot ? "bg-[#2e2f43] text-gray-100" : "bg-[#5865f2] text-white";

    
    return (
        <div
            className={`flex mb-3 ${isBot ? "flex-row" : "flex-row-reverse"}`}
        >
            {/* Imagem na esquerda para o bot ou na direita para o usuário */}
            <img
                src={logo}
                className={`w-8 h-8 ${isBot ? "mr-2" : "ml-2"} mt-1`}
                alt={isBot ? "FURIA" : "Usuário"}
            />

            {/* Caixa de mensagem */}
            <div className={`text-${isBot ? "left" : "right"} text-sm`}>
                <p className={`p-3 rounded-2xl inline-block max-w-xs ${background}`}>
                    {text}
                </p>
            </div>
        </div>
    );
}