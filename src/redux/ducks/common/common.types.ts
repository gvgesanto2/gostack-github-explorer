// Common data types
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
}
