export default function Timeline({ items, IconComponent }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li key={`${item.title}-${item.period}`} className="timeline-item reveal" style={{ '--i': index }}>
          <span className="timeline-dot">
            <IconComponent size={16} />
          </span>
          <div className="card timeline-card">
            <span className="timeline-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p className="timeline-place">{item.place}</p>
            {item.text && <p className="muted">{item.text}</p>}
            {item.points.length > 0 && (
              <ul className="timeline-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
