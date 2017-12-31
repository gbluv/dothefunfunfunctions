export const makeUserUtils = ({ connection, mailService }) => ({
  createUser: name => (
      connection.table('users').insert({
        is_new: true,
        full_name: name
      }).then(user => user.id)
  ),
  deleteUser: id =>{
    connection.table('users').delete(id);
  }
});

export default makeUserUtils;


