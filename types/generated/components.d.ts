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
    description: '';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'project.projects-relations',
      'oneToMany',
      'api::project.project'
    >;
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

export interface ProjectCardtype extends Schema.Component {
  collectionName: 'components_project_cardtypes';
  info: {
    displayName: 'cardtype';
  };
  attributes: {
    type: Attribute.String;
    imageCard: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    typeProject: Attribute.Enumeration<
      ['apartamentos', 'moradias', 'corporativo']
    >;
  };
}

export interface ProjectCards extends Schema.Component {
  collectionName: 'components_project_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    imgCard: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    typeProject: Attribute.Enumeration<
      ['apartamentos', 'moradias', 'corporativo']
    >;
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

export interface NewsHero extends Schema.Component {
  collectionName: 'components_news_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
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
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'about-us.recents-projects',
      'oneToMany',
      'api::project.project'
    >;
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
    description: '';
  };
  attributes: {
    href: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.String;
  };
}

export interface AboutUsHero extends Schema.Component {
  collectionName: 'components_about_us_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    blockQuote1: Attribute.Component<'about-us.block-quote1'>;
    imageCover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface AboutUsChronos extends Schema.Component {
  collectionName: 'components_about_us_chronos';
  info: {
    displayName: 'chronos';
  };
  attributes: {
    year: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface AboutUsChronology extends Schema.Component {
  collectionName: 'components_about_us_chronologies';
  info: {
    displayName: 'chronology';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'about-us.chronos', true>;
  };
}

export interface AboutUsBlockQuote2 extends Schema.Component {
  collectionName: 'components_about_us_block_quote2s';
  info: {
    displayName: 'blockQuote2';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface AboutUsBlockQuote1 extends Schema.Component {
  collectionName: 'components_about_us_block_quote1s';
  info: {
    displayName: 'blockQuote1';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    info1: Attribute.String;
    subinfo1: Attribute.String;
    info2: Attribute.String;
    subinfo2: Attribute.String;
    info3: Attribute.String;
    subinfo3: Attribute.String;
    info4: Attribute.String;
    subinfo4: Attribute.String;
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
      'project.cardtype': ProjectCardtype;
      'project.cards': ProjectCards;
      'news.preview-news': NewsPreviewNews;
      'news.hero': NewsHero;
      'general.link': GeneralLink;
      'about-us.services-section': AboutUsServicesSection;
      'about-us.recents-projects': AboutUsRecentsProjects;
      'about-us.partnership-section': AboutUsPartnershipSection;
      'about-us.partner-ship': AboutUsPartnerShip;
      'about-us.hero': AboutUsHero;
      'about-us.curiosity': AboutUsCuriosity;
      'about-us.curiosity-section': AboutUsCuriositySection;
      'about-us.chronos': AboutUsChronos;
      'about-us.chronology': AboutUsChronology;
      'about-us.block-quote2': AboutUsBlockQuote2;
      'about-us.block-quote1': AboutUsBlockQuote1;
    }
  }
}
