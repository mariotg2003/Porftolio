function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title" id={id}>
          {title}
        </h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeading;
