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

export type ProductItemProps = {
    image: string;
    title: string;
    description?: string;
    item: {
      titleItem: string;
      image: string;
      description: string,
      link: { linkTitle: string; appstore?: string; playstore?: string }[],
      buildWith: string;
    }[];
};