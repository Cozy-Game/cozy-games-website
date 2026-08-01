import { ReactElement } from 'react';
import { Cubes } from '../../components/Cubes';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import content from '../../content/site.json';

/** Landing page: full-viewport hero with logo, studio name, slogan and footer. */
export function HomePage(): ReactElement {
  return (
    <div className="page">
      <Cubes />
      <main className="hero">
        <Logo />
        <h1 className="hero__title">{content.hero.title}</h1>
        <p className="hero__slogan">{content.hero.slogan}</p>
      </main>
      <Footer />
    </div>
  );
}
