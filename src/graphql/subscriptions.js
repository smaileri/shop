/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
      id
      title
      description
      category
      quantity
      price
      picture
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
      id
      title
      description
      category
      quantity
      price
      picture
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
      id
      title
      description
      category
      quantity
      price
      picture
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      balance
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      balance
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      balance
      createdAt
      updatedAt
      __typename
    }
  }
`;
