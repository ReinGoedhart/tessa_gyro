import { DividerTypeOne, DividerTypeTwo } from "../components/divider";
import "./pagestyling.css";
import exampleImage from "../img/ExamplePhoto.jpg";
import TessaWouters from "../img/TessaWouters.jpg";
import GyroLogo from "../img/gyrologo.png";
import TessaWoutersHouding from "../img/tessawoutershouding.png";
import MooiePose from "../img/mooiepose.png";
import LesGeven from "../img/Lesgeven.jpg";
import LesGeven2 from "../img/Lesgeven2.jpg";
import LesGeven3 from "../img/Lesgeven3.jpg";
import LesGeven4 from "../img/Lesgeven4.jpg";
import IntroPose from "../img/intropose.jpg";
import Houdingen from "../img/houdingen.jpg";
import blob from "../img/blob.svg";
import { IntroScreen } from "../components/introscreen";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <>
      <IntroScreen />

      <section className="lightest">
        <div className="content">
          <div className="text-container">
            <h1>GyroTonic</h1>
            <br />
            <p>
              Een Nieuwe revolutionaire trainingsmethode die zich richt op het
              versterken en mobiliseren van het hele lichaam. Het combineert
              elementen uit yoga, tai chi, dans en gymnastiek om een holistische
              benadering van fitness te bieden. Met behulp van speciaal
              ontworpen apparatuur en vloeiende, circulaire bewegingen,
              stimuleert gyrotonic niet alleen spieropbouw, maar ook
              flexibiliteit, coördinatie en evenwicht.
            </p>
          </div>
          <div className="image-container">
            <img id="mooiepose" src={Houdingen} alt="" />
          </div>
        </div>
        <DividerTypeOne color={"dark"} />
      </section>

      <section className="dark">
        <div className="content gyro">
          <div className="text-container" id="rightside">
            <h1>Wat kan gyrotonic voor jou betekenen?</h1>
            <br />
            <p>
              Het antwoord is simpel: alles! Of je nu een atleet bent die zijn
              prestaties wil verbeteren, een professional die op zoek is naar
              stressvermindering, een senior die de mobiliteit wil vergroten of
              iemand die herstelt van een blessure, gyrotonic kan je helpen jouw
              doelen te bereiken. De oefeningen zijn aanpasbaar aan elk
              fitnessniveau en bieden een veilige en effectieve manier om je
              lichaam te versterken, blessures te voorkomen en je algehele
              welzijn te verbeteren.
            </p>
          </div>
          <div className="image-container gyro">
            <img className="shape" src={blob} alt="" />
            <img className="picture" src={TessaWoutersHouding} alt="" />
          </div>
        </div>
        <DividerTypeTwo color={"lightest"} />
      </section>

      <section className="lightest">
        <div className="content">
          <div className="text-container biografie">
            <h1> Over mijzelf</h1>
            <br />
            <p>
              Mijn naam is Tessa Wouters, en ik ben een gepassioneerde personal
              trainer die gespecialiseerd is in het geven van gyrotonic. Ik
              geloof sterk in de kracht van beweging en de transformatieve
              effecten die het kan hebben op ons lichaam en onze geest.
            </p>
          </div>
          <div className="image-container">
            <img id="lesgeven" src={LesGeven} alt="" />
          </div>
        </div>
        <DividerTypeOne color={"dark"} />
      </section>

      <section className="dark">
        <div className="content gyro">
          <div className="text-container" id="rightside">
            <h1>Interesse?</h1>
            <br />
            <p>
              Bij mij ben je in goede handen. Als ervaren personal trainer en
              gecertificeerde gyrotonic-instructeur ben ik toegewijd aan het
              begeleiden en ondersteunen van mijn cliënten op hun reis naar een
              gezonder en fitter leven. Met mijn diepgaande kennis van het
              menselijk lichaam en mijn passie voor beweging, zal ik jou helpen
              om jouw persoonlijke doelen te bereiken en het beste uit jezelf te
              halen. Dus waar wacht je nog op?
            </p>
          </div>
          <div className="image-container gyro" id="voorbeelden">
            <img className="makebigger" src={LesGeven} alt="" />
            <img className="makebigger" src={LesGeven2} alt="" />
            <img className="makebigger" src={LesGeven3} alt="" />
            <img className="makebigger" src={LesGeven4} alt="" />
          </div>
        </div>
        <DividerTypeTwo color={"lightest"} />
      </section>

      <section section className="lightest">
        <div className="content">
          <div className="content contact">
            <div className="text-container subcontact">
              <h1>Contact</h1>
              <br />
              <p>
                Neem vandaag nog contact met mij op en ontdek de vele voordelen
                van gyrotonic voor jouw lichaam en geest. Samen zullen we een op
                maat gemaakt trainingsprogramma ontwikkelen dat perfect past bij
                jouw behoeften en doelen. Laten we samen werken aan een
                gezonder, sterker en meer evenwichtig leven.
              </p>
            </div>
            <div className="text-container subcontact">
              <br />
              <ul className="SocialList">
                <li>
                  <SocialIcon url="https://linkedin.com/in/jaketrent" />
                  &emsp;LinkedIn
                </li>
                <li>
                  <SocialIcon url="https://www.facebook.com/rein.werner.7/" />
                  &emsp;Facebook
                </li>
                <li>
                  <SocialIcon url="rein.goedhart@gmail.com" />
                  &emsp;Email
                </li>
                <li>
                  <SocialIcon url="https://twitter.com/debroervanroos" />
                  &emsp;Twitter
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DividerTypeOne color={"dark"} />
      </section>

      <p className="dark">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
    </>
  );
}
