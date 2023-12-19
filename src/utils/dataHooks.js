import { generateClient } from "aws-amplify/api";
import { listItems } from "../graphql/queries";
import {createItem} from '../graphql/mutations'

export async function queryItemsByCategory(category) {
  const client = generateClient();
  const variables = {
    filter : {
        category : {
            'eq': category
        }
    }
  }
  try {
    const result = await client.graphql({
      query: listItems,
      variables: variables,
    });
    return result.data.listItems.items
  } catch (err) {
    console.log("error quering items:", err);
  }
}

export async function mutationCreateItem(fields) {
    const client = generateClient();
    const variables = {
      input : fields
    }
    try {
      const result = await client.graphql({
        query: createItem,
        variables: variables,
      });
      return result
    } catch (err) {
      console.log("error quering items:", err);
    }
  }
