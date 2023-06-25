/**
 *
 * read() 함수는 데이터 수신 중에는 suspender 변수에 저장되어 있는 API를 호출하는 코드를 반환하고
 * 데이터 수신이 완료되면 데이터를 반환합니다.
 */

function fetchUser(userId) {
  let user = null;

  const suspender = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data;
      }, 3000);
    });

  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
}

function fetchPosts(userId) {
  let posts = null;

  const suspender = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        posts = data;
      }, 3000);
    });

  return {
    read() {
      if (posts === null) {
        throw suspender;
      } else {
        return posts;
      }
    },
  };
}

function fetchData(userId) {
  return {
    user: fetchUser(userId),
    posts: fetchPosts(userId),
  };
}

export default fetchData;
