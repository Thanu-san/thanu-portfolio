import useReveal from '../hooks/useReveal'
import Timeline from './Timeline'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="rv" ref={ref}>
      <h2>About Me</h2>
      <p className="lead">First-year journey, foundations, and code.</p>

      <div className="about-overview">
        {/* Concise personal introduction */}
        <div className="about-bio">
          <p>
            I’m San SengThanu, a second-year IT student at ISTAD. This portfolio brings together the skills, projects, and experiences I developed during my first year.
          </p>
          <p>
            Alongside my university studies, I completed the Preuniversity and Foundation Gen 6 courses to strengthen my programming and web development foundations. My learning grew from C++ and web design into Java, React, databases, Linux, and working with APIs.
          </p>
          <p>
            I enjoy learning by building, debugging, and understanding how each piece works. Every project is another piece of the bigger picture.
          </p>
        </div>

        {/* Compact code-style profile card */}
        <div
          className="code"
          tabIndex={0}
          role="region"
          aria-label="Profile data for Thanu written as code"
        >
          <div className="code-bar" aria-hidden="true"><i /><i /><i /></div>
          <span className="k">const</span> <span className="f">thanu</span> = {'{'}{'\n'}
          {'  '}<span className="f">name</span>: <span className="s">"Thanu"</span>,{'\n'}
          {'  '}<span className="f">status</span>: <span className="s">"Second-year IT student"</span>,{'\n'}
          {'  '}<span className="f">institution</span>: <span className="s">"ISTAD"</span>,{'\n'}
          {'  '}<span className="f">portfolioScope</span>: <span className="s">"First-year learning and projects"</span>,{'\n'}
          {'  '}<span className="f">focus</span>: [<span className="s">"Frontend development"</span>, <span className="s">"Java programming"</span>],{'\n'}
          {'  '}<span className="f">approach</span>: <span className="s">"Learn by building, debugging, and improving"</span>{'\n'}
          {'}'};
        </div>
      </div>

      {/* Learning timeline section */}
      <Timeline />
    </section>
  )
}
