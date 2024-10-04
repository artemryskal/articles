<template>
  <div class="article-layout">
    <!-- Шапка -->
    <HeaderBase dark />

    <!-- Контент -->
    <main>
      <slot />
    </main>

    <!-- Подвал -->
    <FooterBase />
  </div>
</template>
