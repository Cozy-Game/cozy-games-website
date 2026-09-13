import { ReactElement } from 'react';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { RollingYarn } from '../../components/RollingYarn';
import content from '../../content/site.json';

/** Landing page: one full-viewport screen — the cat, the slogan and the footer. */
export function HomePage(): ReactElement {
  return (
    <div className="page">
      <main className="hero">
        {/* The studio name is drawn inside the lockup, so the heading is for
            screen readers and search engines only. */}
        <h1 className="visually-hidden">{content.hero.title}</h1>
        <Logo />
        <p className="hero__slogan">{content.hero.slogan}</p>
        <RollingYarn />
      </main>
      <Footer />
    </div>
  );
}
