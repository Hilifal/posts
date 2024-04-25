import Head from "next/head";
import Image from "next/image";
//import { Inter } from "next/font/google";
//import styles from "@/styles/Home.module.css";
import { useQuery, gql } from '@apollo/client';
import Post from "@/components/posts/Post/Post";



const GET_LOCATIONS = gql`
query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`
const GET_ID = gql`
query Get_id {
  posts{
    id
    title
    body
    user{
      name
      username
      email
      phone
    }
  }
}  
`
  


// 400 неверный запрос (плохо написан кл)
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {loading, error, data} = useQuery(GET_ID)
  console.log(loading)
  console.log(error)
  /*if (!loading){
    console.log(data.posts.map((element:any) => {
      console.log(element)
    }))
    
  }*/
  /*console.log(data.posts.forEach((element:any) => {
    console.log(element)
  }))*/
  if (loading) return <p>Loading...</p>

  return (
    <div>
      {data.posts.map((post:any) => (
        <div key={post.id}>
          <Post
            text={post.body}
            title ={post.title}
            autorName={post.user.username}
          />
        </div>
      ))}
    {/*<Post 
      text={data.posts[99].body}
      title={data.posts[99].title}
      autorName={data.posts[99].user.username}/>*/}
    </div>
  );
}
