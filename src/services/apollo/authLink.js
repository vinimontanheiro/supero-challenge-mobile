import {setContext} from 'apollo-link-context';

const authLink = setContext(() => ({
  headers: {
    authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmdWxhbm9Ac3VwZXJvLmNvbS5iciIsImlhdCI6MTU4MDg0NjQ3MCwiZXhwIjoxNTgwODY4MDcwfQ.De6Tk7wBFbHeekqg5PyTHwiRTDSh2mMUtTgKjx4hn5o`,
  },
}));

export default authLink;
