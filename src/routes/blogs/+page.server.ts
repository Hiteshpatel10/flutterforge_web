import type { Blogs } from '$lib/model/blogs';
import { forgeComponents } from '$lib/server/api_endpoints';

export const load = async () => {
	const url = 'https://gql.hashnode.com';
	const query = `
  query {
    publication(host: "geekaid.in") {
      id
      title
      posts(first: 20) {
        edges {
          node {
            title
            brief
            url
            updatedAt
            coverImage {
              url
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query })
	};

	const response = await fetch(url, options);

    const blogs: Blogs = await  response.json();




    
	return {
        blogs: blogs
    };
};
