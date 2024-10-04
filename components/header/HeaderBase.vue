<script setup lang="ts">
const props = defineProps<{
  dark?: boolean
}>()

const { y } = useWindowScroll()
const header = useTemplateRef<HTMLElement>('header')

// Получаем логотип
const logo = computed<string>(() => {
  const fileName = `logo-${props.dark ? 'secondary' : 'primary'}.svg`
  return `/images/${fileName}`
})

// Отслеживаем горизонтальный скролл.
// Если шапку не видно, то она будет "выезжать"
watch(y, () => {
  if (!header.value) return false
  const { height } = useElementSize(header)
  const isSticky = y.value > height.value
  header.value.classList.toggle('sticky', isSticky)
})
</script>

<template>
  <header ref="header" class="header top-0 bg-primary z-10" :class="{ dark }">
    <div class="container flex justify-between items-center py-8">
      <!-- Лого -->
      <NuxtLink to="/">
        <NuxtImg :src="logo" alt="Articler" class="h-8" />
      </NuxtLink>

      <!-- Создать статью -->
      <button class="button">Create article</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  transition: position 0.35s ease-out;

  &.sticky {
    position: sticky;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
    background: none;
    backdrop-filter: blur(10px);
    animation: slideDown 0.35s ease-out;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  &.dark {
    @apply bg-text;
  }
}
</style>
