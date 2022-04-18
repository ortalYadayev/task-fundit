import matchesService from "./services/matches";

export type Match = {
  id: string;
  creationTime: number;
  companyName: string;
  amountReq: number;
  borrower: {
    bankruptcy: boolean;
    creditScore: number;
    ssn: number;
    financeData: {
      number: string;
      balance: number;
      currency: string;
    };
    user: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      state: string;
      userIp: string;
    };
  };
  labels?: string[];
};

export type ApiClient = {
  getMatches: (page: number) => Promise<{ data: Match[], length: number }>;
};

export const createApiClient = (): ApiClient => {
  return {
    getMatches: (page: number) => {
      const mm = matchesService.getMatches(page);
      return mm;
    },
  };
};
