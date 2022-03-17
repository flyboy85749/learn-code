import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
import FeaturedPosts from '../sections/FeaturedPosts';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Learn Dash Code Blog</title>
      </Head>
<FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => <PostCard post={post.node} key={post.title} />)}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
