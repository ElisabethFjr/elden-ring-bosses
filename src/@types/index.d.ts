export interface Boss {
  id: string;
  name: string;
  image: string | null;
  description: string;
  location: string;
  drops: [];
  healthPoints: string;
}
