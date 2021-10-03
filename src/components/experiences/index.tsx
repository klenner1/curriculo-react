import React from "react";
import Timeline from "components/timeline";
import CardTimeline from "components/timeline/card-timeline";

function Experiences() {
  return (
    <Timeline>
      <CardTimeline title="Meta3" subtitle="Pleno" description="Mai 2021 ">
        Desenvolvedor Full Stack desenvolvendo aplicações Web React, seu BFF e
        APIs
      </CardTimeline>
      <CardTimeline
        title="Meta3"
        subtitle="Pleno"
        description="Jul 2020 - Mai 2021"
      >
        Líder técnico do time e Desenvolvedor Full Stack, desenvolvendo APIs e
        realizando manutenção dos robôs em Python
      </CardTimeline>
      <CardTimeline
        title="Meta3"
        subtitle="Júnior"
        description="Fev 2020 - Jul 2020"
      >
        Desenvolvedor Front-end Angular em um squad focado na modernização do
        atendimento ao cliente
      </CardTimeline>
      <CardTimeline
        title="Meta3"
        subtitle="Júnior"
        description="Fev 2019 - Fev 2020"
      >
        Desenvolvedor Full Stack na migração de sistemas legados para ASP.NET
      </CardTimeline>
      <CardTimeline
        title="Meta3"
        subtitle="Trainee"
        description="Set 2018 - Fev 2019"
      >
        Desenvolvedor Full Stack na migração de sistemas legados para ASP.NET
        MVC e Javascript
      </CardTimeline>
    </Timeline>
  );
}

export default Experiences;
