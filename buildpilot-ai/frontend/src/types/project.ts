export type ProjectStatus =
  | "planning"
  | "building"
  | "testing"
  | "completed"
  | "paused";

export interface ProjectSummary {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  healthScore: number;
  lastUpdatedAt: string;
  techStack: string[];
}
