import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamTeamSection extends Schema.Component {
  collectionName: 'components_team_team_sections';
  info: {
    displayName: 'teamSection';
  };
  attributes: {
    teamMember: Attribute.Component<'team.team-member', true>;
  };
}

export interface TeamTeamMember extends Schema.Component {
  collectionName: 'components_team_team_members';
  info: {
    displayName: 'teamMember';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    picture: Attribute.String;
  };
}

export interface ServicesService extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProjectProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Attribute.String;
  };
}

export interface GeneralLink extends Schema.Component {
  collectionName: 'components_general_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface AboutUsServicesSection extends Schema.Component {
  collectionName: 'components_about_us_services_sections';
  info: {
    displayName: 'servicesSection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    service: Attribute.Component<'services.service', true>;
  };
}

export interface AboutUsRecentsProjects extends Schema.Component {
  collectionName: 'components_about_us_recents_projects';
  info: {
    displayName: 'recentsProjects';
  };
  attributes: {
    project: Attribute.Component<'project.project', true>;
  };
}

export interface AboutUsPartnershipSection extends Schema.Component {
  collectionName: 'components_about_us_partnership_sections';
  info: {
    displayName: 'partnershipSection';
  };
  attributes: {
    partinership: Attribute.Component<'about-us.partner-ship', true>;
  };
}

export interface AboutUsPartnerShip extends Schema.Component {
  collectionName: 'components_about_us_partner_ships';
  info: {
    displayName: 'partnerShip';
  };
  attributes: {
    href: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutUsHero extends Schema.Component {
  collectionName: 'components_about_us_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    link: Attribute.Component<'general.link'>;
  };
}

export interface AboutUsCuriosity extends Schema.Component {
  collectionName: 'components_about_us_curiosities';
  info: {
    displayName: 'curiosity';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutUsCuriositySection extends Schema.Component {
  collectionName: 'components_about_us_curiosity_sections';
  info: {
    displayName: 'curiositySection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    curiosity: Attribute.Component<'about-us.curiosity', true>;
  };
}

export interface AboutUsChronology extends Schema.Component {
  collectionName: 'components_about_us_chronologies';
  info: {
    displayName: 'chronology';
  };
  attributes: {
    year: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team.team-section': TeamTeamSection;
      'team.team-member': TeamTeamMember;
      'services.service': ServicesService;
      'project.project': ProjectProject;
      'general.link': GeneralLink;
      'about-us.services-section': AboutUsServicesSection;
      'about-us.recents-projects': AboutUsRecentsProjects;
      'about-us.partnership-section': AboutUsPartnershipSection;
      'about-us.partner-ship': AboutUsPartnerShip;
      'about-us.hero': AboutUsHero;
      'about-us.curiosity': AboutUsCuriosity;
      'about-us.curiosity-section': AboutUsCuriositySection;
      'about-us.chronology': AboutUsChronology;
    }
  }
}
