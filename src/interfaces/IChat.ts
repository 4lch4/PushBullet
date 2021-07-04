interface IChat {
  active: boolean;
  created: number;
  iden: string;
  modified: number;
  with: With;
}

interface With {
  email: string;
  email_normalized: string;
  iden: string;
  image_url: string;
  name: string;
  type: string;
}