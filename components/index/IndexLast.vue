<script setup lang="ts">
import { articleAll } from '~/mocks/article'
</script>

<template>
  <section class="section container articles mb-14">
    <h1 class="section__title">Last articles</h1>

    <!-- Список статей -->
    <div class="flex flex-col gap-y-14">
      <article
        v-for="(article, i) in articleAll"
        :key="i"
        class="grid grid-cols-1 md:grid-cols-2 gap-7 articles__item">
        <!-- Превью -->
        <NuxtImg
          src="/images/mock.png"
          alt="Article preview"
          class="articles__preview rounded-[32px] w-full" />

        <div class="articles__details font-secondary">
          <!-- Тег -->
          <span class="font-medium text-lighter">
            {{ article.tag }}
          </span>
          <!-- Название -->
          <h3 class="mb-[10px]">
            {{ article.title }}
          </h3>
          <div class="flex items-center text-xs">
            <!-- Дата -->
            <span class="flex items-center mr-6">
              <Icon name="icon:calendar" size="20" class="mr-3" />
              {{ article.date }}
            </span>
            <!-- Автор -->
            <span class="flex items-center">
              <Icon name="icon:user" size="20" class="mr-3" />
              {{ article.author }}
            </span>
          </div>
          <!-- Описание -->
          <p class="font-light leading-6 pt-12">
            {{ article.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.articles {
  &__details {
    order: 1;
  }

  @media (min-width: 769px) {
    &__item:nth-child(even) &__preview {
      order: 2;
    }
  }
}
</style>
