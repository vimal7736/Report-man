import axios from 'axios';

const API_URL = 'http://sacrosys.net:6674/api/3455';


export const getTopSellingData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getTopSellingItems`, {
      headers: {
        'branchID': '',
        'fromDate': "02/11/2023",
        'toDate': "10/11/2023",
        'Token': 'your_access_token_here', 
        "topCount":100
        },
    });
    console.log("1234567890se:", response.data)

    return{
        topSelling: response.data.itemWiseSales,
    };
} catch (error) {
    console.error('Error in getSectionwiseTaxData:', error);
    throw error;
}
};
export const getLeastSellingData = async () => {
  try {
    const response = await axios.get(`${API_URL}/getLeastSellingItems`, {
      headers: {
        'branchID': '',
        'fromDate': "02/11/2023",
        'toDate': "10/11/2023",
        'Token': 'your_access_token_here', 
        "topCount":100
        },
    });
    console.log("1234567890se:", response.data)

    return{
        topSelling: response.data.itemWiseSales,
    };
} catch (error) {
    console.error('Error in getSectionwiseTaxData:', error);
    throw error;
}
};