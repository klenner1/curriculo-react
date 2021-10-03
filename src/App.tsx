import React from "react";

import Card from "components/card";
import Contact from "components/contact";
import Skill from "components/skill";
import {
  IcGithub,
  IcLinkedin,
  IcMail,
  IcPhone,
  IcPlace,
} from "./components/icons";

import "./App.scss";
import Experiences from "components/experiences";
import Academic from "components/academic";
import Title from "components/title";
import Footer from "components/footer";

function App() {
  return (
    <div className="app">
      <section>
        <article className="flex-column gap-8">
          <div>
            <h1>Klenner Martins Barros</h1>
            <p>
              Analista desenvolvedor de sistemas com experiencia em ASP.NET,
              Angular e React
            </p>
          </div>
          <Contact icon={IcPlace} link="#" text="Belo Horizonte" />
          <Contact
            icon={IcPhone}
            link="tel:31995861006"
            text="(31) 99586-1006"
          />
          <Contact
            icon={IcMail}
            link="mailto:klenner.dev@gmail.com"
            text="klenner.dev@gmail.com"
          />
          <Contact
            icon={IcLinkedin}
            link="https://www.linkedin.com/in/klenner-martins-barros/"
            text="klenner-martins-barros"
            blank
          />
          <Contact
            icon={IcGithub}
            link="https://github.com/klenner1"
            text="klenner1"
            blank
          />
        </article>
      </section>
      <section className="flex-column gap-16 align-center">
        <div className="flex-column">
          <article>
            <Card>
              <div className="flex-row gap-32 wrap">
                <div className="flex-1 flex-column gap-8">
                  <h3>Competências</h3>
                  <Skill text="Adaptabilidade" percent={80} />
                  <Skill text="Realacionameno" percent={75} />
                  <Skill text="Espirito de equipe" percent={85} />
                  <Skill text="Resolução de problemas" percent={90} />
                </div>
                <div className="flex-1 flex-column gap-8">
                  <h3>Linguagens</h3>
                  <Skill text="JavaScript" percent={90} />
                  <Skill text="C#" percent={90} />
                  <Skill text="TypeScript" percent={80} />
                  <Skill text="Java" percent={50} />
                </div>
                <div className="flex-1 flex-column gap-8">
                  <h3>Tecnologias</h3>
                  <Skill text="ASP.NET" percent={90} />
                  <Skill text="React" percent={80} />
                  <Skill text="Angular" percent={80} />
                  <Skill text="Docker" percent={50} />
                </div>
              </div>
            </Card>
          </article>
          <Title>Experiencia</Title>
          <article>
            <Experiences />
          </article>
          <Title>Formação acadêmica</Title>
          <article>
            <Academic />
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
