import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const EducationData = [
  {
    date: "2023-2025",
    title: "Math & Computer Science",
    subTitle: "SGC",
  },
  {
    date: "2017-2022",
    title: "Maths",
    subTitle: "Majra School",
  },
];