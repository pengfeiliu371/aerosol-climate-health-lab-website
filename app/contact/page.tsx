import { PageShell } from "../components/SiteChrome";
import { ProtectedEmail } from "./ProtectedEmail";
import "./contact.css";

export default function ContactPage() { return <PageShell><main><section className="page-hero gold-page"><p className="kicker">CONTACT</p><h1>Questions, ideas,<br />and <em>collaborations.</em></h1><p>For research inquiries, prospective student opportunities, or collaboration, please get in touch.</p></section><section className="page-body contact-page"><div><p className="kicker">EMAIL</p><ProtectedEmail /></div><div><p className="kicker">ADDRESS</p><p>School of Earth and Atmospheric Sciences<br />Georgia Institute of Technology<br />Atlanta, Georgia</p></div></section></main></PageShell>; }

