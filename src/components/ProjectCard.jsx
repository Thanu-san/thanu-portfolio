export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="chips">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      <a href={link}>repo →</a>
    </div>
  )
}
