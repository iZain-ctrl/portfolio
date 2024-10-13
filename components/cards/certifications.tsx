import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationsData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const CertificationsData = [
  {
    date: "2023",
    title: "Red Hat Certified Specialist in Security",
    subTitle: "RedHat",
    
  },
  {
    date: "2022",
    title: "Huawei Certified ICT Associate (HCIA) - Security",
    subTitle: "Huawei",
  },
  {
    date: "2021",
    title: "Cisco Certified CyberOps Associate",
    subTitle: "Cisco",
  },
];