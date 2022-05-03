export interface IExperienceItem {
  corp: string;
  logo?: string;
  duration?: {
    from: Date;
    to: Date;
  };
  position: string;
  description?: string;
  link?: string;
}
