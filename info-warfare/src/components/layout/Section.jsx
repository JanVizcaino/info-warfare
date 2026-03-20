export default function Section({ children, title, className = '' }) {
  return (
    <section className={`mb-32 ${className}`}>
      {title && (
        <div className="mb-12 border-b-2 border-brutal-accent pb-4">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}