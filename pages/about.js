import Head from 'next/head'
import { Categories, PostWidget } from '../components';
import FeaturedPosts from '../sections/FeaturedPosts';
import Link from 'next/link'

const About = () => {
    return ( 
        <div className="container mx-auto mb-8 px-10">
            <Head>
        <title>Learn Dash Code Blog - About</title>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 col-span-1 bg-white p-10 rounded-lg">
        <h1 className="text-center mb-10 text-xl font-bold">About Learn Dash Code</h1>
            <p className="text-center mb-5">In July of 2019, I began a 24 week intensive program to expand my knowledge of the web design and development world, and enrolled in the Full Stack Web Development Certification Program offered by the University of Arizona, here in Tucson.</p>
            <p className="text-center mb-5">After much nail biting and hair pulling (not that I had much to start with), I managed to graduate in January 2020. This site was created in the hopes of teaching others those skills.</p>
            <h2 className="text-center mb-5 font-bold">Tech Stack Learned (MERN)</h2>
            <ul>
                <li className="text-center mb-5"><Link href="https://www.mongodb.com/" target="_blank" passHref><span className="cursor-pointer text-xl text-red-500">MongoDB</span></Link></li>
                <p className="text-center mb-2">Get your ideas to market faster with an application data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love.</p>
                <li className="text-center mb-5"><Link href="https://www.npmjs.com/package/express" target="_blank" passHref>
            <span className="cursor-pointer text-xl text-red-500">Express</span>
          </Link></li>
          <p className="text-center mb-2">We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>
          <li className="text-center mb-5"><Link href="https://reactjs.org/" target="_blank" passHref><span className="cursor-pointer text-xl text-red-500">React</span></Link></li>
          <p className="text-center mb-2">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
          <li className="text-center mb-5"><Link href="https://nodejs.org/en/" target="_blank" passHref><span className="cursor-pointer text-xl text-red-500">Node</span></Link></li>
          <p className="text-center mb-2">As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
            </ul>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
        </div>
        </div>
     );
}
 
export default About;