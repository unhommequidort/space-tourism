import LargeButton from './components/LargeButton/LargeButton';
import MainHeader from '@/app/components/MainHeader/MainHeader';
import { ff_sans_cond, ff_serif } from './style/fonts';
import Link from 'next/link';

export const metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism',
};

export default function Home() {
  return (
    <div className="home grid page-wrapper">
      <MainHeader />
      <main id="main" className=" grid-container grid-container--home">
        <div>
          <h1
            className={`fs-500 text-accent uppercase ${ff_sans_cond.className} letter-spacing-1`}
          >
            So, you want to travel to
            <span className={`fs-900 text-white ${ff_serif.className} d-block`}>
              Space
            </span>
          </h1>
          <p>
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <LargeButton url="/destination" text="Explore" />
        </div>
      </main>
    </div>
  );
}
