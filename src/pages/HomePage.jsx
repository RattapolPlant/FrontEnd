import HomeSlider from "../components/HomeSlider"
import ListCard from "../components/ListCard"
import PostCard from "../components/PostCard"
import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [ posts , setPosts ] = useState([])

  useEffect(() => {
    queryPosts()
  }
  ,[])

  const queryPosts = async() => {
      const endpoint = "https://api.suwizx.dev/kasedtakorn/graphql";
      const headers = {
          "content-type": "application/json",
          "Authorization": "<token>"
      };
      const graphqlQuery = {
          "operationName": "fetchAuthor",
          "query": `query fetchAuthor{
              posts {
                nodes {
                  id
                  slug
                  title
                  excerpt
                  featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                }
              }
            }`,
          "variables": {}
      };
      
      const response = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: graphqlQuery
      });
      setPosts(response.data.data.posts.nodes)
  }

  return(
    <>
    <div className="p-4">
      <div className="max-w-4xl mx-auto my-4">
      <HomeSlider posts={posts} />
        <h2 className="text-4xl font-bold underline text-center my-7">บทความ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
          {posts.map((post,i) =>  <PostCard slug={"/"+post.slug} key={i} img={post.featuredImage.node.sourceUrl} title={post.title} discreption={post.excerpt} />)}
        </div>
       
      </div>
    </div>
    </>
  )
}

export default HomePage