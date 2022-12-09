function makeFriendsList(friends) {
  let ulBlock = document.createElement('ul');

  for (let friend of friends) {
    let liBlock = document.createElement('li');
    liBlock.textContent = `${friend.firstName} ${friend.lastName}`;
    ulBlock.append(liBlock);
  }

  return ulBlock;
}
