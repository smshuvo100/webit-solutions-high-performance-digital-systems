
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  result: string;
}

export interface Review {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Industry {
  name: string;
  icon: string;
}
