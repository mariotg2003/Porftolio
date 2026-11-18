function SiteFooter({ text }) {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <a className="brand" href="#top" aria-label={text.top}>
          <span className="brand-mark">MT</span>
          <span className="brand-name">Mario Tirado</span>
        </a>
        <p>&copy; 2025 Mario Tirado Gallardo. {text.rights}</p>
        <a className="back-to-top" href="#top">
          {text.top} ↑
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
