export type Job = {
  id: string;
  title: string;
  location: string;
  pay: string;
  type: string;
  licence: string;
  experience: string;
  description: string;
  benefits: string[];
};

export const jobs: Job[] = [
  {
    id: "class-1-birmingham",
    title: "Class 1 (C+E) HGV Driver",
    location: "Birmingham, West Midlands",
    pay: "£50 – £70 / hour",
    type: "Full-time",
    licence: "C+E / Class 1",
    experience: "1+ year",
    description: "Trunking and general haulage work for reliable Class 1 drivers. Day and night shifts available depending on the contract.",
    benefits: ["Weekly pay", "Driver support", "Stable routes", "Overtime available"]
  },
  {
    id: "class-2-manchester",
    title: "Class 2 HGV Driver",
    location: "Manchester, Greater Manchester",
    pay: "£80 – £100 / hour",
    type: "Full-time",
    licence: "C / Class 2",
    experience: "1+ year",
    description: "Multi-drop and local delivery work with a professional transport team.",
    benefits: ["Weekly pay", "Local routes", "Training support", "Overtime available"]
  },
  {
    id: "multi-drop-london",
    title: "Multi-Drop HGV Driver",
    location: "London, Greater London",
    pay: "£100 – £170 / hour",
    type: "Full-time",
    licence: "C or C+E",
    experience: "1+ year",
    description: "Customer-focused multi-drop deliveries across London and surrounding areas.",
    benefits: ["Regular shifts", "Driver support", "Career progression", "Weekly pay"]
  }
];

export function getJob(id: string) {
  return jobs.find((job) => job.id === id);
}
