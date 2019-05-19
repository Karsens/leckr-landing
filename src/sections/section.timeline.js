import React from "react";
import { Container } from "reactstrap";
import Timeline from "react-dual-timeline";
import { StyleRoot } from "radium";
import ReactMarkdown from "react-markdown";

const TimelineComponent = ({ title, description, timeline }) => (
  <Container>
    {title && <h1>{title}</h1>}

    {description && <p>{description}</p>}
    <StyleRoot>
      <Timeline lineColor="#000" activeColor="#EEE">
        {timeline.map(entry => (
          <div style={{ textAlign: "left" }}>
            <h2>{entry.title}</h2>
            <ReactMarkdown source={entry.markdown} linkTarget="_blank" />
          </div>
        ))}
      </Timeline>
    </StyleRoot>
    <div style={{ height: 100 }} />
  </Container>
);

export default TimelineComponent;
