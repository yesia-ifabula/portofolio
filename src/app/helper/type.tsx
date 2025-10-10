export type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  periodStart?: string;
  periodEnd?: string;
};

export type Education = {
  study: string;
  institution: string;
  institutionUrl: string;
  period: string;
  urlDoc: string;
};

type intro = {
  title: string;
  name: string;
  description: string;
}

export type AboutMobileProp = {
  intro: intro;
  experiences: Experience[];
  educations: Education[];
  programmingLanguages: string[];
};