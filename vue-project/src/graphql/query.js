import ggl from 'graphql-tag';

const projectsList = ggl`
query{
  projects{
    data{
      id
      attributes{
        projectFor,
        projectName,
        projectLogo{
          data{
            attributes{
              mime
            }
          }
        },
        projectImg{
          data{
            attributes{
              name,
            
            }
          }
        }
      }
    }
  }
}


`;
export const queryService = {
	projectsList,
};
