<template>
  <div class="default-layout">
    <!-- Шапка -->
    <HeaderBase />

    <!-- Контент -->
    <main>
      <slot />
    </main>

    <!-- Подвал -->
    <FooterBase />
  </div>
</template>
