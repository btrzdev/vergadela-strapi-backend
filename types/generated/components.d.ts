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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Attribute.String;
    content: Attribute.RichText;
    imgPageCover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pageTitle: Attribute.String;
    pageSubtitle: Attribute.String;
  };
}

export interface ProjectSocialMedia extends Schema.Component {
  collectionName: 'components_project_social_medias';
  info: {
    displayName: 'socialMedia';
  };
  attributes: {
    links: Attribute.String;
  };
}

export interface ProjectProjectsRelations extends Schema.Component {
  collectionName: 'components_project_projects_relations';
  info: {
    displayName: 'projectsRelations';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface ProjectProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'project';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Attribute.String;
    local: Attribute.String;
    team: Attribute.String;
    strategy: Attribute.String;
    client: Attribute.String;
    date: Attribute.String;
    terms: Attribute.String;
    services: Attribute.String;
    gallery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    details: Attribute.Text;
    concept: Attribute.Text;
  };
}

export interface ProjectInfoSection extends Schema.Component {
  collectionName: 'components_project_info_sections';
  info: {
    displayName: 'infoSection';
    description: '';
  };
  attributes: {
    location: Attribute.String;
    team: Attribute.String;
    client: Attribute.String;
    terms: Attribute.String;
    strategy: Attribute.String;
    date: Attribute.String;
    services: Attribute.String;
    socialMedia: Attribute.Component<'project.social-media', true>;
    carrouselImages: Attribute.Component<'project.carrousel-images'>;
    details: Attribute.Component<'project.details', true>;
  };
}

export interface ProjectHero extends Schema.Component {
  collectionName: 'components_project_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProjectDetails extends Schema.Component {
  collectionName: 'components_project_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ProjectCarrouselImages extends Schema.Component {
  collectionName: 'components_project_carrousel_images';
  info: {
    displayName: 'carrouselImages';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface NewsPreviewNews extends Schema.Component {
  collectionName: 'components_news_preview_news';
  info: {
    displayName: 'previewNews';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
      'project.social-media': ProjectSocialMedia;
      'project.projects-relations': ProjectProjectsRelations;
      'project.project': ProjectProject;
      'project.info-section': ProjectInfoSection;
      'project.hero': ProjectHero;
      'project.details': ProjectDetails;
      'project.carrousel-images': ProjectCarrouselImages;
      'news.preview-news': NewsPreviewNews;
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
