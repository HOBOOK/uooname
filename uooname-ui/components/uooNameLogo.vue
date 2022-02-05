<template>
  <img
    class="uooname-logo"
    alt="uooname logo"
    src="/logo-title.png"
  >
</template>

<style>
.uooname-logo {
  max-height: 42px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
