import styles from './testimonials-grid.module.css'
import danielImg from '../assets/images/image-daniel.jpg'
import jeanetteImg from '../assets/images/image-jeanette.jpg'
import jonathanImg from '../assets/images/image-jonathan.jpg'
import kiraImg from '../assets/images/image-kira.jpg'
import patrickImg from '../assets/images/image-patrick.jpg'
import { QuotesSvg } from './bg-quotation'

export default function TestimonialGrid() {
  return (
    <section className={styles['grid__wrapper']}>
      <div className={styles['grid__item__one']}>
        <header className={styles['grid__item__header']}>
          <picture>
            <img src={danielImg} alt="daniel profile image" className={`${styles['grid__item__header_img']} ${styles['grid__item__header_img__status']}`} />
          </picture>
          <div>
            <h3 className={styles['grid__item__header__name']}>
              Daniel Clifford
            </h3>
            <span className={styles['grid__item__header__verified']}>
              Verified Graduate
            </span>
            <picture className={styles['grid__item__header__quote']}>
              <QuotesSvg />
            </picture>
          </div>
        </header>
        <article>
          <h3 className={styles['grid__item__title']}>
            I received a job offer mid-course, and the subjects I learned were current, if not more so,
            in the company I joined. I honestly feel I got every penny’s worth.
          </h3>
          <p className={styles['grid__item__text']}>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
            The next 12 weeks was the best - and most grueling - time of my life. Since completing
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </article>
      </div>
      <div className={styles['grid__item__two']}>
        <header className={styles['grid__item__header']}>
          <figure>
            <img src={jonathanImg} alt="daniel profile image" className={styles['grid__item__header_img']} />
          </figure>
          <div>
            <h3 className={styles['grid__item__header__name']}>
              Jonathan Walters
            </h3>
            <span className={styles['grid__item__header__verified']}>
              Verified Graduate
            </span>
          </div>
        </header>
        <article>
          <h3 className={styles['grid__item__title']}>
            The team was very supportive and kept me motivated
          </h3>
          <p className={styles['grid__item__text']}>
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
            for a big company. This was one of the best investments I’ve made in myself. ”
          </p>
        </article>
      </div>
      <div className={styles['grid__item__three']}>
        <header className={styles['grid__item__header']}>
          <figure>
            <img src={jeanetteImg} alt="daniel profile image" className={styles['grid__item__header_img']} />
          </figure>
          <div>
            <h3 className={styles['grid__item__header__name']}>
              Jeanette Harmon
            </h3>
            <span className={styles['grid__item__header__verified']}>
              Verified Graduate
            </span>
          </div>
        </header>
        <article>
          <h3 className={styles['grid__item__title']}>
            An overall wonderful and rewarding experience
          </h3>
          <p className={styles['grid__item__text']}>
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
            while doing something I love. ”
          </p>
        </article>
      </div>
      <div className={styles['grid__item__four']}>
        <header className={styles['grid__item__header']}>
          <figure>
            <img src={patrickImg} alt="daniel profile image" className={`${styles['grid__item__header_img']} ${styles['grid__item__header_img__status']}`} />
          </figure>
          <div>
            <h3 className={styles['grid__item__header__name']}>
              Patrick Abrams
            </h3>
            <span className={styles['grid__item__header__verified']}>
              Verified Graduate
            </span>
          </div>
        </header>
        <article>
          <h3 className={styles['grid__item__title']}>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
            learning from their experiences was easy.
          </h3>
          <p className={styles['grid__item__text']}>
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
            gave me the confidence necessary to be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the personal attention you need from
            an incredible community of smart and amazing people. ”
          </p>
        </article>
      </div>
      <div className={styles['grid__item__five']}>
        <header className={styles['grid__item__header']}>
          <figure>
            <img src={kiraImg} alt="daniel profile image" className={styles['grid__item__header_img']} />
          </figure>
          <div>
            <h3 className={styles['grid__item__header__name']}>
              Kira Whittle
            </h3>
            <span className={styles['grid__item__header__verified']}>
              Verified Graduate
            </span>
          </div>
        </header>
        <article>
          <h3 className={styles['grid__item__title']}>
            Such a life-changing experience. Highly recommended!
          </h3>
          <p className={styles['grid__item__text']}>
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
            100% recommend! ”
          </p>
        </article>
      </div>
    </section>

  )
}
