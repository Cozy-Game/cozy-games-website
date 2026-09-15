import { ReactElement } from 'react';
import { CozyBackdrop } from '../../components/CozyBackdrop';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import content from '../../content/site.json';

/** Landing page: one full-viewport screen — the cat, the slogan and the footer. */
export function HomePage(): ReactElement {
  return (
    <div className="page">
      <CozyBackdrop />
      <main className="hero">
        {/* The studio name is drawn inside the lockup, so the heading is for
            screen readers and search engines only. */}
        <h1 className="visually-hidden">{content.hero.title}</h1>
        <Logo />
        <p className="hero__slogan">{content.hero.slogan}</p>
      </main>
      <Footer />
    </div>
  );
}
