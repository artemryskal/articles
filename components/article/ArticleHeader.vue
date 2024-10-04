<script setup lang="ts">
import backgroundMock from '~/assets/images/mock.png'

const route = useRoute()
const coverStyles = { backgroundImage: `url(${backgroundMock})` }

const share = async () => {
  await navigator.share({
    url: route.fullPath,
  })
}
</script>

<template>
  <header class="article-header">
    <div class="bg-text pb-8">
      <!-- Кнопка назад и заголовок -->
      <div class="pt-24 text-body container">
        <button
          class="flex items-center font-secondary"
          @click="$router.back()">
          <Icon name="icon:arrow-left" size="20" />
          Go back
        </button>

        <h1>Cognitive biases in UX design</h1>
      </div>
    </div>

    <!-- Превью -->
    <div
      class="flex flex-col object-cover h-[500px] bg-center bg-no-repeat bg-cover font-secondary"
      :style="coverStyles">
      <div class="flex flex-col flex-grow backdrop-brightness-[0.6]">
        <div class="flex flex-col justify-end flex-grow container pb-[30px]">
          <div class="flex items-center justify-between text-xs text-body">
            <div class="flex items-center">
              <!-- Дата -->
              <span class="flex items-center mr-6">
                <Icon name="icon:calendar" size="20" class="mr-3" />
                Apr 8, 2023
              </span>
              <!-- Автор -->
              <span class="flex items-center">
                <Icon name="icon:user" size="20" class="mr-3" />
                Viacheslav M.
              </span>
            </div>

            <!-- Кнопка поделиться -->
            <button class="button items-end" @click="share">
              <Icon name="icon:share" size="20" class="mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
