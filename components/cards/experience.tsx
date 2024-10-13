import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const experiencesData = [
  {
    date: "2023 - Now",
    title: "Cybersecurity expert",
    subTitle: "Toptal",
    link: "",
    tag: "Remote",
  },
  {
    date: "2022-2024",
    title: "Blackhat Hacker",
    subTitle: "Toptal",
    link:"",
    tag: "Remote",
  },
];