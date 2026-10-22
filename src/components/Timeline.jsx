import { educationStages } from '../data/education'
import { piecePath } from '../utils/puzzlePath'

function PuzzlePieceIcon({ color = 'var(--a)', size = 20 }) {
  // S = 24 with top=0 (flat), right=1 (out), bottom=0 (flat), left=-1 (in)
  const d = piecePath(24, 0, 1, 0, -1)
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 28 28"
      className="stage-puzzle-svg"
      aria-hidden="true"
    >
      <path
        d={d}
        fill={`color-mix(in srgb, ${color} 18%, var(--panel))`}
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Timeline() {
  return (
    <div className="timeline-wrap" aria-label="First-year learning timeline">
      <div className="timeline-header">
        <div className="timeline-subtitle-tag">
          <span className="timeline-tag-bracket">//</span> First-Year Learning Journey
        </div>
        <h3 className="timeline-title">Academic &amp; Parallel Course Timeline</h3>
        <p className="timeline-lead">
          My first-year learning was structured into two main phases at ISTAD—combining standard university semesters with concurrent, intensive courses.
        </p>
      </div>

      <div className="timeline-stages">
        {educationStages.map((stage, sIdx) => {
          const accentColor = sIdx === 0 ? 'var(--a)' : 'var(--b)'
          return (
            <div key={stage.id} className="stage-block">
              {/* Stage header banner */}
              <div className="stage-header">
                <div className="stage-badge-group">
                  <PuzzlePieceIcon color={accentColor} size={22} />
                  <span className="stage-num" style={{ color: accentColor }}>
                    {stage.stageNumber}
                  </span>
                  <span className="stage-title">{stage.stageTitle}</span>
                </div>
                <div className="stage-note-pill">{stage.periodNote}</div>
              </div>

              {/* Parallel tracks grid: Left = University, Right = Concurrent Course */}
              <div className="tracks-grid">
                {stage.tracks.map((track) => {
                  const isUni = track.type === 'university'
                  return (
                    <article
                      key={track.id}
                      className={`track-card ${isUni ? 'track-uni' : 'track-course'}`}
                      tabIndex={0}
                      aria-label={`${track.title} - ${track.badge}`}
                    >
                      <div className="track-top">
                        <span className={`track-pill ${isUni ? 'pill-uni' : 'pill-course'}`}>
                          {track.badge}
                        </span>
                        <span className="track-timing">{track.timing}</span>
                      </div>

                      <h4 className="track-heading">{track.title}</h4>
                      <div className="track-inst">Institution: {track.institution}</div>
                      <p className="track-desc">{track.summary}</p>

                      <div className="subjects-heading">Covered Subjects &amp; Topics:</div>
                      <ul className="subjects-list">
                        {track.subjects.map((sub, i) => (
                          <li key={i} className="subject-row">
                            <div className="subject-main">
                              <span className="subject-bullet" aria-hidden="true">▪</span>
                              <span className="subject-name">{sub.name}</span>
                              {sub.note && (
                                <span className="subject-note"> ({sub.note})</span>
                              )}
                            </div>
                            {sub.topics && sub.topics.length > 0 && (
                              <div className="subject-chips">
                                {sub.topics.map((topic) => (
                                  <span key={topic} className="subject-chip">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
