import useReveal from '../hooks/useReveal'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects" className="rv" ref={ref}>
      <h2>projects</h2>
      <p className="lead">Each one is a piece that fits together.</p>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
