import Card from './components/card';
import NavBar from './components/nav';
import config from './config.js';


interface Blog{
  id: number;
  attributes: {
    title: string;
    content: string;
    author: string;
    summary: string;
    img: any;
    imgalt: string
  }
}

interface FetchBlogResponse{
  data:Blog[]
}

const blogPostAPI = `http://localhost:1337/api/blogposts?populate=*`;

const fetchBlogs = async (): Promise<FetchBlogResponse> => {
  const reqOptions = {
    headers: {
      'Authorization': `Bearer ${config.token}`,
      // 'Content-Type': 'application/json'
    }
  };

  try {
    const req = await fetch(blogPostAPI, reqOptions);

    if (!req.ok) {
      // If the response status is not ok, throw an error with the status text
      throw new Error(`Failed to fetch data: ${req.statusText}`);
    }

    const res: FetchBlogResponse = await req.json();
    return res;
  } catch (error) {
    // Handle any network or JSON parsing errors
    console.error('Error fetching data:', error);
    throw error; // Optionally rethrow the error for the calling code to handle
  }
};


// const fetchBlogsSingle = async()({ params }: { params: { id: string } }) = {
//   const post = await getPostData
// }


export default async function Home() {

  const blogs = await fetchBlogs();
  const posts = blogs.data
  console.log('blogpost' , blogs.data)
  return (
    <div className='w-full flex flex-col items justify-center'>
      <NavBar/>
      <div className='flex flex-row justify-center content-center m-auto'>
      {posts.map(blog => 
      (
        <Card
          key={blog.id}
          title={blog.attributes.title}
          summary={blog.attributes.summary}
          author={blog.attributes.author}
          
        />
      )
        
       
        )}
        </div>
    </div>
  )
}
 


