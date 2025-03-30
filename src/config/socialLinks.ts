import {
  faGithub,
  faTwitter,
  faYoutube,
  faResearchgate,
  faGoogleScholar,
  faBluesky,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileLines,
  faEnvelope,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  name: string;
  url: string;
  icon: any; // FontAwesome icon type
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/sronilsson',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/simon-nilsson-776752106/',
    icon: faLinkedin,
  },
  {
    name: 'Scholar',
    url: 'https://scholar.google.com/citations?user=dKt60xAAAAAJ&hl=en',
    icon: faGoogleScholar,
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Simon-Nilsson-4',
    icon: faResearchgate,
  },
  {
    name: 'CV',
    url: 'https://github.com/sronilsson/website_sronilsson/blob/main/docs/cv.pdf',
    icon: faFileLines,
  },
  {
    name: 'Email',
    url: 'mailto:sronilsson@gmail.com',
    icon: faEnvelope,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/nilssonsro',
    icon: faTwitter,
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/sronilsson.bsky.social',
    icon: faBluesky,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@simonnilsson7470',
    icon: faYoutube,
  },
  {
    name: 'SimBA',
    url: 'https://github.com/sgoldenlab/simba',
    icon: faPaw,
  },
];