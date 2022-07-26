const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  //   destructuring
  const person = data.results[0];
  //   console.log(person);
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  //alternatevely
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  //carefull match label property names
  return {
    image,
    phone: phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
