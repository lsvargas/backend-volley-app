const parseListUsers = list => {
  return list.map(list => ({
    ...list,
    users: list.users.map(({ status, user, id }) => ({
      id,
      userId: user.id,
      status,
      name: user.name,
      lastname: user.lastname
    }))
  }));
};

const parseUserTemplateList = ({ id, userId, templateListId, user }) => {
  const { email, name, lastname } = user;

  return {
    id,
    userId,
    email,
    name,
    lastname,
    templateListId
  }
}


module.exports = {
  parseListUsers,
  parseUserTemplateList
};