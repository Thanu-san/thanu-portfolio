import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="rv" ref={ref}>
      <h2>about</h2>
      <p className="lead">The quick version, written as code.</p>
      <div className="code">
        <div className="code-bar"><i /><i /><i /></div>
        <span className="k">const</span> <span className="f">me</span> = {'{'}{'\n'}
        {'  '}<span className="f">role</span>: <span className="s">"IT Student"</span>,{'\n'}
        {'  '}<span className="f">focus</span>: [<span className="s">"Web Development"</span>, <span className="s">"Databases"</span>, <span className="s">"Problem Solving"</span>],{'\n'}
        {'  '}<span className="f">learning</span>: <span className="s">"something new every week"</span>,{'\n'}
        {'  '}<span className="f">openToWork</span>: <span className="n">true</span>{'\n'}
        {'}'};
      </div>
    </section>
  )
}
