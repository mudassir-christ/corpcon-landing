import Section from "./Section";
import Heading from "./Heading";
import { Gradient } from "./design/About";

const About = () => {
  return (
    <Section id="about">
      <div className="container">
        <Heading title="About" text="Connect with the Best Minds in Technology" />

        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden ">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">CorpCon</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  A premier corporate conference that brings together professionals and tech
                  enthusiasts to connect, collaborate, and explore emerging trends in technology.
                  Hosted by the Department of Computer Science at Christ University, this event is a
                  melting pot of ideas and innovations.
                </p>
              </div>
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden ">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">CHRIST (Deemed to be University)</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Situated in Bangalore, Christ University is a hub for multi-disciplinary
                  education, fostering both professional and personal growth. Our diverse student
                  population and highly qualified faculty emphasize critical thinking and adherence
                  to our motto of “excellence and service.”
                </p>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default About;
