import instanceAxios from "../_helper/axios";

const getMatches = async () => {
    const response = await instanceAxios.get('/match');
    return response.data;
};

export default { getMatches };