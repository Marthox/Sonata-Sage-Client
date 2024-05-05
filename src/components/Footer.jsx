import "./Footer.sass";

export default function Footer() {
  return (
    <footer className="GlobalFooter">
      {/* Info */}
      <section className="FooterSection">
        <h3>Info</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </ul>
      </section>
      {/* Logo */}
      <section className="FooterSection">
        <h3>Logo</h3>
        <ul>
          <li>Logo</li>
          <li>Logo</li>
          <li>Logo</li>
        </ul>
      </section>
      {/* Social */}
      <section className="FooterSection">
        <h3>Social</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </section>
    </footer>
  );
}
