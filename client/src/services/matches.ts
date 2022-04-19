import instanceAxios from "../_helper/axios";

const getMatches = async (page: number) => {
    const response = await instanceAxios.get('/match', { params: { page } });
    return response.data;
};

const approveMatch = async (id: string) => {
    await instanceAxios.post('/approves', { params: { id } });
};

const declineMatch = async (id: string) => {
    await instanceAxios.post('/declines', { params: { id } });
};

export default { getMatches, approveMatch, declineMatch };