/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import {Blog} from "Types/Post";

const blogPost: Blog.Post = {
  title: "Noteworthy technology acquisitions 2021",
  image: "https://flowbite.com/docs/images/blog/image-1.jpg",
  body: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  created_at: new Date()
}

Route.get('/', async ({inertia}) => {
  return inertia.render('Welcome', {
    post: blogPost,
  })
})
