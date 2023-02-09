export type Users = {
  login: {
    uuid: string
  }
  gender: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  location: {
    city: string;
    country: string;
  };
  dob: {
    age: string;
  };
  phone: string;
  cell: string;
};
