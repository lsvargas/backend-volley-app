const parseListUsers = list => {
  return list.map(list => ({
    ...list,
    users: list.users.map(({ status, user, id, waitingList }) => ({
      id,
      userId: user.id,
      status,
      name: user.name,
      lastname: user.lastname,
      waitingList
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
};


const parseList = users => {
  return users.map((user) => ({
    ...user,
    name: user.user.name,
    lastname: user.user.lastname
  }));
}


const parseUserList = ({ id, userId, listId, user, status, waitingList }) => {
  const { email, name, lastname } = user;

  return {
    id,
    userId,
    email,
    name,
    lastname,
    listId,
    status,
    waitingList
  }
};




module.exports = {
  parseListUsers,
  parseUserTemplateList,
  parseUserList,
  parseList
};