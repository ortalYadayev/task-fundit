import instanceAxios from "../_helper/axios";

const getMatches = async (page: number) => {
    const response = await instanceAxios.get('/match', { params: { page } });
    return response.data;
};

export default { getMatches };