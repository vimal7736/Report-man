import axios from 'axios';

const API_URL = 'http://sacrosys.net:6674/api/3455';

export const getSectionwiseTaxData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getSectionwiseTaxData`, {
      headers: {
        'branchID': '',
        'fromDate': "02/11/2023",
        'toDate': "10/11/2023",
        },
    });
    console.log("🚀 ~ file: Tax.js:9 ~ getSectionwiseTaxData ~ response:", response.data.itemWiseSales)

    return{
        taxData: response.data.itemWiseSales,
    };
} catch (error) {
    console.error('Error in getSectionwiseTaxData:', error);
    throw error;
}
};
