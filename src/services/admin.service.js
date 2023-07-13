import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL_LOCAL 
console.log(`${baseUrl}`,'baseUrl');
export const postStudentData = async (values) => {
  try {
    return await axios.post(
      `${baseUrl}/api/register`,
      values
    );
  } catch (error) {
    return { error };
  }
};
export const AdminLoginService = async (values) => {
  try {
    return await (
      await axios.post(
        `${baseUrl}/api/login`,
        values
      )
    ).data;
  } catch (error) {
    return { error };
  }
};
export const AdminSingService = async (values) => {
  try {
    return await (
      await axios.post(
        `${baseUrl}/adminsignup`,
        values
      )
    ).data;
  } catch (error) {
    return { error };
  }
};
export const getEventByQuery = async (values) => {
  try {
    return await (
      await axios.get(
        `${baseUrl}/api/getCompletedEvents?Status=${values}`
      )
    ).data;
  } catch (error) {
    return { error };
  }
};

export const addEvent = async (values) => {
  try {
    const storedObj = localStorage.getItem('user');

    const token = JSON.parse(storedObj).token;
    console.log(token);
    return await axios.post(
      `${baseUrl}/api/addEvent`,
      values,
      {
        headers: { Authorization: token },
      }
    );
  } catch (error) {
    return { error };
  }
};
export const addPost = async (values) => {
  try {
    const storedObj = localStorage.getItem('user');

    const token = JSON.parse(storedObj).token;
    console.log(token);
    return await axios.post(
      `${baseUrl}/api/addPost`,
      values,
      {
        headers: { Authorization: token },
      }
    );
  } catch (error) {
    return { error };
  }
};
export const RegistrationMember = async (values) => {
  try {

    return await axios.post(
      `${baseUrl}/api/memberRegistration`,
      values,
   
    );
  } catch (error) {
    return { error };
  }
};

export const getEventAll = async () => {
  // console.log(values);
  const storedObj = localStorage.getItem('user');

  const token = JSON.parse(storedObj).token;
  console.log(token);
    try {
    const { data } = await axios.get(
      `${baseUrl}/api/getEvents`,
      {
        headers: { Authorization: token },
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
};
export const getPostsAll = async () => {
  // console.log(values);
  const storedObj = localStorage.getItem('user');

  const token = JSON.parse(storedObj).token;
  console.log(token);
    try {
    const { data } = await axios.get(
      `${baseUrl}/api/getPost`,
      {
        headers: { Authorization: token },
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
};
export const getDonorAll = async () => {
  // console.log(values);
  const storedObj = localStorage.getItem('user');

  const token = JSON.parse(storedObj).token;
  console.log(token);
    try {
    const { data } = await axios.get(
      `${baseUrl}/api/getDonarAllList`,
      {
        headers: { Authorization: token },
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
};
export const getMembersAll = async () => {
  // console.log(values);

    try {
    const { data } = await axios.get(
      `${baseUrl}/api/getMembers`,
    );
    return data;
  } catch (error) {
    return { error };
  }
};
export const getMemberVerified = async () => {
  // console.log(values);

    try {
    const { data } = await axios.get(
      `${baseUrl}/api/getMembersVeriefid`,
    );
    return data;
  } catch (error) {
    return { error };
  }
};
export const getCompletedEvent = async () => {
  // console.log(values);
  const storedObj = localStorage.getItem('user');

  const token = JSON.parse(storedObj).token;
  console.log(token);
    try {
    const { data } = await axios.get(
      `${baseUrl}/api/getEvents`,
      {
        headers: { Authorization: token },
      }
    );
    return data;
  } catch (error) {
    return { error };
  }
};

export const CompleteEvent = async (id) => {
  console.log(id ,'skdmls');
// console.log(editedParams);
//  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
  try {
   return await axios
      .put(
        `${baseUrl}/api/CompleteEvent?id=${id}`
      )
      .then((response) => {
       return response
      });
  } catch (error) {
    return error;
  }
};
export const CompleteMember = async (id) => {
  console.log(id ,'skdmls');
// console.log(editedParams);
//  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
  try {
   return await axios
      .put(
        `${baseUrl}/api/verifiedMember?id=${id}`
      )
      .then((response) => {
       return response
      });
  } catch (error) {
    return error;
  }
};
export const deleteEventId = async (value) => {
  //  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
    try {
      const storedObj = localStorage.getItem('user');

      const token = JSON.parse(storedObj).token;
     return await axios
        .put(
          `${baseUrl}/api/removeEvent?eventId=${value}`
        )
        .then((response) => {
         return response
        });
    } catch (error) {
      return error;
    }
  };
  export const deleteMemberId = async (value) => {
    //  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
      try {
        const storedObj = localStorage.getItem('user');
  
        const token = JSON.parse(storedObj).token;
       return await axios
          .put(
            `${baseUrl}/api/deleteMember?eventId=${value}`
          )
          .then((response) => {
           return response
          });
      } catch (error) {
        return error;
      }
    };
  
  export const deletePostId = async (value) => {
    //  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
      try {
        const storedObj = localStorage.getItem('user');
  
        const token = JSON.parse(storedObj).token;
       return await axios
          .put(
            `${baseUrl}/api/removePost?eventId=${value}`
          )
          .then((response) => {
           return response
          });
      } catch (error) {
        return error;
      }
    };

  export const uploadResultOnly = async (token ,EditabledData) => {
    //  const  params = await stringify(editedParams); // assigned to different variable to reduce api calling time
      try {
       return await axios
          .post(
            `${baseUrl}/addResultsArray`,
            EditabledData,
    
            {
              headers: { Authorization: token },
            }
          )
          .then((response) => {
           return response
          });
      } catch (error) {
        return error;
      }
    };
// axios.post(`${process.env.REACT_APP_API_URL_LOCAL}/addResult`, EditabledData, {
//   headers: { Authorization: token },
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
