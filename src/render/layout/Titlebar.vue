<template>
  <nav class="Titlebar">
    <!-- menu -->
    <div
      class="Icon-wrapper Icon-wrapper--titlebar Icon-wrapper--single"
      style="position: absolute;"
      title="Settings"
      @click="toggleDrawer"
    >
      <div class="Menu-wrapper" :class="drawerOpen ? 'is-collapsed' : ''">
        <div class="Menu-line"></div>
        <div class="Menu-line"></div>
      </div>
    </div>

    <h1 class="Title">FocusNow</h1>

    <div class="Icon-group" style="position: absolute; top: 0; right: 0;">
      <div
        class="Icon-wrapper Icon-wrapper--titlebar Icon-wrapper--double--left"
        style="padding-left: 18px"
        @click="winMinimize"
      >
        <!-- minimize -->
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 14 2"
          xml:space="preserve"
          width="15px"
          height="20px"
          class="Icon Icon--minimize"
        >
          <line
            fill="none"
            stroke="#F6F2EB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="1"
            y1="1"
            x2="13"
            y2="1"
          />
        </svg>
      </div>
      <div
        class="Icon-wrapper Icon-wrapper--titlebar Icon-wrapper--double--right"
        style="padding-right: 18px"
        @click="winClose"
      >
        <!-- close -->
        <svg
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 12.6 12.6"
          xml:space="preserve"
          height="15px"
          class="Icon Icon--close"
        >
          <line
            fill="none"
            stroke="#F6F2EB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="1"
            y1="1"
            x2="11.6"
            y2="11.6"
          />
          <line
            fill="none"
            stroke="#F6F2EB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="11.6"
            y1="1"
            x2="1"
            y2="11.6"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import { ipcRenderer } from "electron";
import { reactive, computed } from 'vue';
import { useViewStore } from '@/render/store/modules/view'

const store = useViewStore()

// 计算属性

const drawerOpen = computed(()=> store.drawerOpen)
const minToTray = computed(()=> store.drawerOpen)
const minToTrayOnClose = computed(()=> store.drawerOpen)


</script>

<style lang="scss" scoped>
.Icon--close,
.Icon--minimize {
  & line {
    @include themify() {
      stroke: themed("color-background-lightest");
    }
  }
}

.Menu-line {
  @include themify() {
    background-color: themed("color-background-lightest");
  }
  display: inline-block;
  width: 20px;
  height: 2px;
  &:last-child {
    width: 10px;
  }
}

.Menu-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
  margin-top: 14px;
  margin-left: 20px;
  &.is-collapsed {
    & .Menu-line:first-child {
      transform: rotate(-45deg);
      width: 12px;
    }
    & .Menu-line:last-child {
      transform: rotate(45deg);
      width: 12px;
    }
  }
}

.Title {
  font-size: 1rem;
  font-weight: 200;
  padding-top: 13px;
}

.Icon-group{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;
  margin-top: 12px;
}

.Titlebar {
  letter-spacing: 0.05em;
  margin-bottom: 18px;
  position: relative;
  text-align: center;
  height: 50px;
  -webkit-app-region: drag;
  @include themify() {
    background: themed("color-short-round");
  }
}

.Icon-wrapper--titlebar {
  -webkit-app-region: no-drag;
  &:hover .Menu-line {
    background-color: var(--color-accent);
  }
  &:hover .Icon--close line {
    stroke: var(--color-focus-round);
  }
  &:hover .Icon--minimize line {
    stroke: var(--color-accent);
  }
}
</style>