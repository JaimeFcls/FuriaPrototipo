export default function Suggestions({ onSelect }) {
    const topics = ["jogo", "elenco", "noticias"];

    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {topics.map((topic, idx) => (
                <button
                    key={idx}
                    onClick={() => onSelect(topic.toLowerCase())}
                    className="bg-[#2d3146] hover:bg-[#3e4361] text-white text-sm px-4 py-2 rounded-full transition-all"
                >
                    {topic}
                </button>
            ))}
        </div>
    );
}
