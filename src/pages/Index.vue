<template>
  <div class="duke">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-tabs
        v-model="tab"
        class="bg-grey-1"
        dense
        align="justify"
      >
        <q-tab class="text-orange"  name="mails" icon="fas fa-chart-line" label="สรุปจำนวน" />
        <q-tab class="text-cyan" name="alarms" icon="fas fa-plus" label="จัดการผู้รับบริการ" />
        <q-tab class="text-red" name="movies" icon="fas fa-cog" label="ออกจากระบบ" />
      </q-tabs>
      <q-separator />
      <q-tab-panels
          v-model="tab"
          animated
          transition-prev="fade"
          transition-next="fade"
          class="bg-white text-black text-center"
        >
          <q-tab-panel name="mails">
              <div class="q-pa-md row items-start q-gutter-md">
                <q-card dark bordered class="bg-white my-card-A">
                  <q-card-section>
                    <div class="text-red">จำนวนผู้รับบริการที่บันทึกทั้งหมด</div>
                    <div class="text-subtitle2 text-grey">12,000</div>
                      <div class="text-grey q-gutter-md" style="font-size: 2.5em;text-align: right">
                        <q-icon name="fas fa-database" />
                      </div>

                      </q-card-section>

                        <q-separator dark inset />

                      <q-card-section>
                        {{ lorem }}
                      </q-card-section>
                </q-card>
                <q-card dark bordered class="bg-white my-card-B">
                  <q-card-section>
                    <div class="text-orange">จำนวนผู้รับบริการที่เข้าถึง</div>
                    <div class="text-subtitle2 text-grey">10,000</div>
                    <div class="text-grey q-gutter-md" style="font-size: 2.5em;text-align: right">
                        <q-icon name="fas fa-user-shield" />
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                      {{ lorem }}
                  </q-card-section>
                </q-card>
                <q-card dark bordered class="bg-white my-card-C">
                  <q-card-section>
                    <div class="text-cyan">จำนวนผู้รับบริการที่ไม่เข้าถึง</div>
                    <div class="text-subtitle2 text-grey">2,000</div>
                    <div class="text-grey q-gutter-md" style="font-size: 2.5em;text-align: right">
                        <q-icon name="fas fa-user-times" />
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                    {{ lorem }}
                  </q-card-section>
                </q-card>
                <q-card dark bordered class="bg-white my-card-D">
                  <q-card-section>
                    <div class="text-green">จำนวนผู้รับบริการที่บันทึกวันนี้</div>
                    <div class="text-subtitle2 text-grey">300</div>
                    <div class="text-grey q-gutter-md" style="font-size: 2.5em;text-align: right">
                        <q-icon name="fas fa-user-clock" />
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                    {{ lorem }}
                  </q-card-section>
                </q-card>
              </div>





          </q-tab-panel>

          <q-tab-panel name="alarms">
              <div class="q-pa-md" style="max-width: 200px">
              <q-btn class="glossy" round color="secondary" icon="fas fa-plus" @click="dialog = true">
                      <q-tooltip
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        เพิ่มผู้รับบริการ
                      </q-tooltip>
                </q-btn>
                <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
                  transition-show="slide-up"
                  transition-hide="slide-down"
                >
                <q-card class="bg-white text-black">
                  <q-bar>
                    <q-space />

                    <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                      <q-tooltip v-if="maximizedToggle" content-class="bg-black text-white">Minimize</q-tooltip>
                    </q-btn>
                    <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                      <q-tooltip v-if="!maximizedToggle" content-class="bg-black text-white">Maximize</q-tooltip>
                    </q-btn>
                    <q-btn dense flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-black text-white">Close</q-tooltip>
                    </q-btn>
                  </q-bar>

                  <q-card-section>
                    <div class="text-h6">ลงทะเบียนผู้รับบริการ</div>
                  </q-card-section>
                  <div class="q-pa-md" style="max-width: 100%">
                      <q-list bordered>
                        <q-expansion-item
                          group="somegroup"
                          icon="perm_identity"
                          label="รายละเอียดเบื้องต้น"
                          default-opened
                          header-class="bg-teal text-white"
                          expand-icon-class="text-white"
                        >
                          <q-card>
                            <q-card-section>
                              <q-select outlined v-model="model" :options="options" label="กลุ่มเป้าหมาย*">
                                <template v-slot:prepend>
                                    <q-icon name="place" @click.stop />
                                  </template>
                                  <template v-slot:append>
                                    <q-icon name="close" @click.stop="model = ''" class="cursor-pointer" />
                                  </template>
                              </q-select>
                            <br>
                            <div class="row">
                              <div class="col-6 col-md-6">
                                <h6>การเข้าถึง
                                    <q-radio keep-color v-model="color" val="teal" label="รายบุคคล" color="teal" />
                                    <q-radio keep-color v-model="color" val="orange" label="กลุ่มย่อย" color="orange" />
                              </h6>
                              </div>
                              <div class="col-6 col-md-6">
                                   <div class="q-pa-md" style="max-width: 300px">
                                    <q-input filled v-model="date" mask="date" :rules="['date']">
                                      <template v-slot:append>
                                        <q-icon name="event" class="cursor-pointer">
                                              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                                <!--<q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />-->
                                              </q-popup-proxy>
                                        </q-icon>
                                      </template>
                                    </q-input>
                                  </div>
                              </div>
                            </div>






                            </q-card-section>
                          </q-card>
                        </q-expansion-item>

                        <q-separator />

                        <q-expansion-item
                        group="somegroup"
                        icon="perm_identity"
                        label="Second"
                        header-class="bg-teal text-white"
                        expand-icon-class="text-white"


                        >
                          <q-card>
                            <q-card-section>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                              eveniet doloribus ullam aliquid.
                            </q-card-section>
                          </q-card>
                        </q-expansion-item>

                        <q-separator />

                        <q-expansion-item
                        group="somegroup"
                        icon="shopping_cart"
                        label="Third"
                        header-class="bg-teal text-white"
                        expand-icon-class="text-white"
                        >
                          <q-card>
                            <q-card-section>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                              eveniet doloribus ullam aliquid.
                            </q-card-section>
                          </q-card>
                        </q-expansion-item>

                        <q-separator />

                        <q-expansion-item
                          group="somegroup"
                          icon="bluetooth"
                          label="Fourth"
                          header-class="bg-teal text-white"
                          expand-icon-class="text-white"

                        >
                          <q-card class="bg-teal-2">
                            <q-card-section>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                              eveniet doloribus ullam aliquid.
                            </q-card-section>
                          </q-card>
                        </q-expansion-item>
                      </q-list>
                    </div>


                  <q-card-section>






                  </q-card-section>
                </q-card>
              </q-dialog>

              </div>

          </q-tab-panel>


          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails',
      color: 'cyan',
      date: '2019/02/01',
      dialog: false,
      maximizedToggle: true,
      model: null,
      options: [
       'PWID', 'MSM', 'TG', 'Migrant','Prisoner', 'Youths', 'Partners', 'MSW','FSW','TGSW','General Population'
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.my-card-A
  width 230px
  height 100px
  border-left .25rem solid red!important
  text-align left
  border-radius 6px

.my-card-B
  width 230px
  height: 100px;
  border-left .25rem solid orange!important
  text-align left
  border-radius 6px
.my-card-C
  width 230px
  height: 100px;
  border-left .25rem solid cyan!important
  text-align left
  border-radius 6px

.my-card-D
  width 230px
  height: 100px;
  border-left .25rem solid #1cc88a!important
  text-align left
  border-radius 6px

.text-subtitle2
  font-weight bold
  font-size 18px

.q-btn--round
    border-radius: 50%;
    padding: 0;
    min-height: 0;
    height: 6em;
    width: 6em;
    min-width: 3em;
    min-height: 3em;

.q-card
    border-radius:6px;

</style>
