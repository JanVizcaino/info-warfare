export default function Transcript({ data }) {
  const formatTime = (s) => {
    if (s === undefined || s === null) return '--:--';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <article className="font-mono text-lg leading-relaxed normal-case space-y-8 bg-white text-black p-8 brutal-border">
      {data.map((line, index) => (
        <p key={index} className="border-l-2 border-brutal-accent pl-4">
          <strong className="px-2 py-1 mr-2 inline-block bg-brutal-accent text-white">
            {formatTime(line.time)}
          </strong>
          {line.text}
        </p>
      ))}
    </article>
  );
}