import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <i className="icon ion-social-instagram" />
          </a>
          <a href="#">
            <i className="icon ion-social-snapchat" />
          </a>
          <a href="#">
            <i className="icon ion-social-twitter" />
          </a>
          <a href="#">
            <i className="icon ion-social-facebook" />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/about">About</a>
          </li>
          <li className="list-inline-item">
            <a href="/terms">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/resources">Resources</a>
          </li>
          <li className="list-inline-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <p className="copyright">CounselAI © 2023</p>
      </footer>
    </div>
  );
}
