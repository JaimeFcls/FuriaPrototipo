export default function TypingIndicator() {
    return (
        <div className="flex items-start mb-3">
            <img src="/Furia_logo.png" className="w-8 h-8 mr-2 mt-1" alt="FURIA Logo" />
            <div className="bg-white p-2 rounded-xl inline-block">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-400"></div>
                </div>
            </div>
        </div>
    );
}