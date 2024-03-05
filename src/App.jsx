// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Footer,
  Navbar,
  Stats,
  Testimonial,
  Hero,
  NewCta,
} from "./components";

const App = () => (
  <div className="bg-black  w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <NewCta />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
