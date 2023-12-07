import axios from 'axios';

const API_URL = 'http://sacrosys.net:6674/api/3455';

export const getItemsSalesData = async (startDate, endDate, selectedTab) => {
  
  try {
    const formattedStartDate = startDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });

    const formattedEndDate = endDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });

    const response = await axios.get(`${API_URL}/getItemsSalesData`, {
      headers: {
        'branchID': '1',
        'fromDate': "02/11/2023",
        'toDate': "10/11/2023",
        'Token': 'your_access_token_here', // Add your token here
      },
    });
    

    const filteredData = response.data.itemWiseSales
      .filter(item => item.billTypeName === selectedTab)
      .map(({ branchId, branchName, barCode, categoryName, itemName, qty, total ,billTypeName}) => ({
        branchId,
        branchName,
        barCode,
        categoryName,
        itemName,
        qty,
        total,
        billTypeName
      }));

      return {
        totalSalesData: response.data.itemWiseSales,
        itemWiseSales: filteredData,
        discountAmount: response.data.discountAmount,
      };
      
      
    } catch (error) {
      console.error('Error in getItemsSalesData:', error);
      throw error;
    }
  };


