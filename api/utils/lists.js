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

const parseUserTemplateList = ({ userId, templateListId, user }) => {
  const { email, name, lastname } = user;

  return {
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