<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar class="bg-primary text-white">
          <q-btn flat round dense icon="menu" class="q-mr-sm"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"

          />
          <!--
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>-->

          <q-toolbar-title>หน้าหลัก</q-toolbar-title>

          <q-btn flat round dense icon="mail">
            <q-badge color="red" floating>5</q-badge>
          </q-btn>
          <q-btn flat round dense icon="far fa-bell">
            <q-badge color="red" floating>2</q-badge>
          </q-btn>








        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>
          <q-item-section avatar>
            <div class="q-btn__content text-center col items-center q-anchor--skip justify-center row no-wrap text-no-wrap">
                <div class="q-avatar doc-layout-avatar"><div class="q-avatar__content row flex-center overflow-hidden">
                    <img :src="require('C:/xampp/htdocs/quasar/rtcm+/src/assets/icon.png')">
                </div>
            </div>
                <div class="q-toolbar__title ellipsis col-shrink">RTCM+</div>
            </div>
          </q-item-section>

        </q-item-label>
            <q-tabs>
              <q-route-tab
                icon="home" label="หน้าหลัก" class="q-btn inline q-btn-item non-selectable q-btn--standard q-btn--rectangle q-focusable q-hoverable"
                to="/"
                exact
              />
            </q-tabs>
            <q-tabs>
              <q-route-tab
                icon="history" label="รายการ" class="home"
                to="/alarms"
                exact
              />
            </q-tabs>
            <q-tabs>
              <q-route-tab
                icon="streetview" label="สถานบริการสุขภาพใกล้เคียง" class="home"
                to="/nearme"
                exact
              />
            </q-tabs>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      home:'HOME',
      DLT:'Delete'
    }
  },
  methods: {
    openURL
  }
}

</script>
<style type="text/css">
	.badge1 {
		position:relative;
	}
	.badge1[data-badge]:after {
		content:attr(data-badge);
		position:absolute;
		top:-15px;
		right:-10px;
		font-size:.7em;
		background:rgb(253, 253, 253);
		color:rgb(255, 0, 0);
		width:18px;height:18px;
		text-align:center;
		line-height:18px;
		border-radius:50%;
		box-shadow:0 0 1px rgb(255, 0, 0);
	}
  .active{
    background-color: blue
  }
  .q-item__label--header {
    color: #000000;
    padding: 16px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.01786em;
}
</style>
