<template>
  <div
    class="box w-full max-w-[200px] h-[200px] grid place-items-center rounded-md p-4 shadow-md shadow-slate-400 relative"
    :class="activeBox ? 'active cursor-pointer' : ''"
    :tabindex="activeBox && 1"
  >
    <h2 class="text-3xl uppercase font-extrabold select-none">{{ boxName }}</h2>
    <span
      v-if="!this.activeBox"
      class="absolute top-2 right-2 rounded-full bg-gray-300 p-1 w-[24px] h-[24px]"
    >
      <img src="../assets/icons/lock.png" alt="lock" />
    </span>

    <span
      v-if="this.noOfCards > 0"
      class="absolute -top-4 -right-4 rounded-full text-white text-center bg-green p-1 w-[25px] h-[25px] text-[11px] font-bold"
    >
      {{ this.noOfCards >= 100 ? "99+" : this.noOfCards }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: { boxName: String, activeBox: Boolean, noOfCards: Number },
};
</script>

<style scoped>
* {
  --green: #ebf4ff;
  --light-green: #f8fbff;
}
.box {
  background: linear-gradient(
    -35deg,
    var(--green),
    var(--green) 35%,
    var(--light-green) 35%,
    var(--light-green) 65%,
    var(--green) 65%,
    var(--green)
  );
}

.box h2 {
  color: #5bd599;
}

.active.box {
  --green: #5bd599;
  --light-green: #88dbb2;
}

.active.box:hover {
  --green: #3ec783;
  --light-green: #71ce9f;
}

.active.box h2 {
  color: white;
}
</style>
