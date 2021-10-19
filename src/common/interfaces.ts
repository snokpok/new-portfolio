export interface IExperienceItem {
  corp: string;
  logo?: string;
  duration?: {
    from: string;
    to: string;
  };
  position: string;
  description?: string[];
  link?: string;
}
