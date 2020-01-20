export class Job {
  id?: number;
  address: string;
  servicetype: string;
  status: string;
  issues: JSON;
}

// pending,approved,completed
