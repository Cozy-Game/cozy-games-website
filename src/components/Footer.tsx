import { ReactElement } from 'react';
import content from '../content/site.json';

/** Compact site footer with contact and legal navigation, copy from site.json. */
export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {content.footer.groups.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="footer__heading">{group.heading}</h2>
            <ul className="footer__links">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="footer__brand">
          <p className="footer__brand-title">{content.hero.title}</p>
          <p className="footer__brand-blurb">{content.hero.blurb}</p>
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
