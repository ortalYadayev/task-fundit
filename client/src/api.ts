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
  approvedAt?: string;
  declinedAt?: string;
};

export type ApiClient = {
  getMatches: (page: number) => Promise<{ data: Match[], approvedCount: number, declinedCount: number, length: number }>;
  approveMatch: (id: string) => void;
  declineMatch: (id: string) => void;
};

export const createApiClient = (): ApiClient => {
  return {
    getMatches: (page: number) => {
     return matchesService.getMatches(page);
    },

    approveMatch: (id: string) => {
      return matchesService.approveMatch(id);
    },

    declineMatch: (id: string) => {
      return matchesService.declineMatch(id);
    },
  };
};
