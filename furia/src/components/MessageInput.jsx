export default function MessageInput({ input, setInput, handleSend }) {
    return (
        <div className="flex space-x-2 mt-4">
            <input
                className="flex-1 p-3 rounded-xl border border-[#444] bg-[#15161e] text-white placeholder-gray-400 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                placeholder="Escreva sua mensagem..."
            />
            <button
                className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-4 py-2 rounded-xl font-medium transition"
                onClick={handleSend}
                aria-label="Enviar mensagem"
            >
                Enviar
            </button>
        </div>

    );
}