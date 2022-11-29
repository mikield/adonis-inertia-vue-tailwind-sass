<script setup lang="ts">
import type {Blog} from 'Types/Post'
import Greeter from 'Components/Greeter.vue'

interface Props {
  post: Blog.Post
}

defineProps<Props>()
</script>

<template>
  <div class="max-w-lg mx-auto mt-6">
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <a href="#">
        <img class="rounded-t-lg" :src="post.image" alt="">
      </a>
      <div class="p-5">
        <a href="#" class="mb-2 block">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight">{{ post.title }}</h5>
          <time class="text-sm text-gray-400">{{ new Date(post.created_at).toLocaleDateString() }}</time>
        </a>
        <p class="font-normal text-gray-700 mb-3">{{ post.body }}</p>
        <a
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href="#">
          Read more
        </a>
      </div>
    </div>
  </div>
</template>
