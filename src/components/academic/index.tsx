import React from "react";
import Timeline from "components/timeline";
import CardTimeline from "components/timeline/card-timeline";

function Academic() {
  return (
    <Timeline>
      <CardTimeline
        title="PUC Minas"
        subtitle="Pós graduação"
        description="2017-2018"
      >
        Arquitetura de Software Distribuído
      </CardTimeline>
      <CardTimeline title="UNA" subtitle="Graduação" description="2015 - 2017">
        Análise e Desenvolvimento de Sistemas
      </CardTimeline>
    </Timeline>
  );
}

export default Academic;
