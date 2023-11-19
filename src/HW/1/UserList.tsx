import React from "react";


type AddressType = {
  street: string | number; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number,
    name: string,
    age: number,
    address: AddressType, // ПРИДЕТСЯ САМОМУ)


};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((ObjectUserListType, index) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={ObjectUserListType.id} id={`hw01-user-${ObjectUserListType.id}`}>
            <strong>{ObjectUserListType.name}</strong> (Age: {ObjectUserListType.age})<strong> Address:</strong>
            {ObjectUserListType.address.street}, {ObjectUserListType.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
