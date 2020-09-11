// Common data types
export interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  issues: Issue[];
}
