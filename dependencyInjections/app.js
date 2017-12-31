import makeUserUtils from './userUtils';


const connection = {
  table: (tableName) => ({
    insert: (props) => (
        new Promise((resolve) =>{
          resolve({
            id: 1
          })
        })
    ),
    delete: (id) => (
        new Promise((resolve) =>{
          resolve(true);
        })
    )
  })
};


const {
  createUser,
  deleteUser
} = makeUserUtils({ connection });


createUser('Jack').then((userId) =>{
  console.log(`create user with id: `,userId);
});
