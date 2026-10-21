import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="rv" ref={ref}>
      <div className="last">
        <h2>The last piece is you 🧩</h2>
        <p className="lead">Let’s build something together.</p>
        <a href="mailto:hello@yourname.dev">hello@yourname.dev</a>
        <a href="#">github</a>
        <a href="#">linkedin</a>
      </div>
    </section>
  )
}
