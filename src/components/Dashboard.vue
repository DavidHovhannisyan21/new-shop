<template>
  <v-container fluid>
    <v-card
      color="#426255 "
      height="150px"
      tile
      flat
      class="d-flex align-center justify-center"
      dark
    >
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">MEN'S LIFESTYLE SHOES</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="#61907d">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutupercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">ONLY BEST PRICES</h6>
                <h3 class="white--text mt-5">Summer Collection is OUT!</h3>
                <v-btn
                  rounded
                  color="#426255"
                  dark
                  class="withoutupercase px-8 mt-10"
                >
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="8">
                <v-img
                  src="1shirt.png"
                  max-height="400"
                  max-width="400"
                  contain
                  class="mt-n6"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="pl-0">
          <v-card height="250px" tile flat color="#61907d">
            <v-row>
              <v-col cols="12" sm="6" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutupercase" small tile>
                  new
                </v-btn>
                <h6 class="white--text mt-8">WHITE T-SHIRT</h6>
                <h3 class="white--text mt-5">Sale Collection 2023</h3>
                <v-btn
                  rounded
                  color="#426255"
                  dark
                  class="withoutupercase px-8 mt-3"
                >
                  More Info
                </v-btn>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                  src="tshirt2.png"
                  max-height="400"
                  max-width="400"
                  contain
                  class="mt-n2"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3" class="mt-n6 pr-0">
          <v-toolbar flat outlined>
            <v-toolbar-title><strong>FILTER</strong></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon class="ml-1">
              <v-icon color="#3853D8"> mdi-sync </v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n6 px0">
          <v-toolbar flat outlined>
            <v-icon>mdi mdi-basket-outline </v-icon>
            COUNT OF ITEMS IN YOUR BASKET - {{ countOfItems }}
            <v-icon>mdi mdi-basket-outline </v-icon>
          </v-toolbar>
        </v-col>
        <v-col cols="12" sm="3" class="mt-n3 px-0">
          <v-toolbar flat outlined class>
            <v-toolbar-title>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="itemsOfSelect" label="SHOW"></v-select>
              </v-col>
            </v-toolbar-title>
          </v-toolbar>
        </v-col>

        <v-col cols="12" sm="3" class="mt-n6 pl-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="#3853D8">mdi-apps</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon class="mx-1">
              <v-icon color="grey">mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-toolbar-title class="ml-2">
              <strong>COMPARE:</strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-badge color="#3853D8" content="3" class="mr-2"></v-badge>
          </v-toolbar>
        </v-col>
        <v-col cols="3" class="py-0 pr-0 mt-n3">
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2"> mdi-chevron-down </v-icon>
              <strong>CATEGORIES</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item v-for="style in styles" :key="style.title">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="style.title"
                    class="ml-8"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-subtitle
                    v-text="style.count"
                  ></v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
              <strong>PRICE</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-toolbar flat>
              <v-text-field
                placeholder="$50"
                filled
                rounded
                dense
                class="mx-2"
              ></v-text-field>
              <v-text-field
                placeholder="$1900"
                filled
                rounded
                dense
                class="mx-2"
              ></v-text-field>
            </v-toolbar>
            <v-range-slider color="green" max="40" min="-30"></v-range-slider>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>BRAND</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-list dense class="mt-n5">
              <v-list-item v-for="brand in brands" :key="brand.title">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="brand.title"
                    class="ml-6"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    color="primary"
                    v-model="brand.state"
                  ></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>COLOR</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group column multiple>
              <v-chip
                filter
                outlined
                color="black"
                text-color="black"
                class="ml-2"
              ></v-chip>
              <v-chip filter color="#E6E6E6" text-color="black"></v-chip>
              <v-chip filter color="#FFB500" text-color="white"></v-chip>
              <v-chip filter color="#F27229" text-color="white"> </v-chip>
              <v-chip filter color="#EB3427" text-color="white"> </v-chip>
              <v-chip filter color="#923FA3" text-color="white"> </v-chip>
              <v-chip filter color="#3A51DF" text-color="white" class="ml-2">
              </v-chip>
              <v-chip filter color="#23A7F5" text-color="white"> </v-chip>
              <v-chip filter color="#5EB524" text-color="white"> </v-chip>
              <v-chip filter color="#7C5F4D" text-color="white"> </v-chip>
              <v-chip filter color="black" text-color="white"> </v-chip>
              <v-chip filter color="lime" text-color="white"> </v-chip>
            </v-chip-group>
          </v-card>
          <v-card flat outlined>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
              <strong>SIZE</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-chip-group
              column
              multiple
              active-class="blue white--text"
              class="ml-2"
            >
              <v-chip v-for="size in sizes" :key="size" :value="size">
                {{ size }}
              </v-chip>
            </v-chip-group>
          </v-card>
        </v-col>
        <v-col cols="9" class="mt-n3">
          <v-row>
            <v-col
              cols="12"
              sm="4"
              v-for="(clothe, i) in clothes"
              :key="i"
              :class="clothe.class"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card height="400" align="center" flat outlined tile>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" small dark>{{ clothe.sold }}</v-btn>
                  </v-card-actions>
                  <v-img
                    :src="clothe.image"
                    width="200"
                    height="200"
                    contain
                  ></v-img>
                  <v-card-text class="mt-n4">
                    <strong :class="hover ? 'red--text' : 'black--text'">{{
                      clothe.title
                    }}</strong>
                  </v-card-text>
                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog"
                      fullscreen
                      hide-overlay
                      transition="dialog-bottom-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                          @click="selectClothing(i)"
                        >
                          BUY
                        </v-btn>
                      </template>
                      <v-card>
                        <v-toolbar dark color="primary">
                          <v-btn icon dark click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                            CLOSE
                          </v-btn>
                          <v-toolbar-title>Settings</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items>
                            <v-btn dark text @click="dialog = false">
                              Save
                            </v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                        <v-list three-line subheader>
                          <div
                            class="card"
                            style="text-align: center; margin: auto"
                          >
                            <div class="card__front card__part">
                              <img
                                class="card__front-square card__square"

                              />
                              <img
                                class="card__front-logo card__logo"
                                
                              />
                              <p class="card_numer">{{ cardNumber  }}</p>
                              <div class="card__space-75">
                                <span class="card__label">Card holder</span>
                                <p class="card__info">{{ cardHolder }}</p>
                              </div>
                              <div class="card__space-25">
                                <span class="card__label">Expires</span>
                                <p class="card__info">{{ expires }}</p>
                              </div>
                            </div>

                            <div class="card__back card__part">
                              <div class="card__black-line"></div>
                              <div class="card__back-content">
                                <div class="card__secret">
                                  <p class="card__secret--last">{{ cvv }}</p>
                                </div>
                                <img
                                  class="card__back-square card__square"
                                
                                />
                                <img
                                  class="card__back-logo card__logo"
                                />
                              </div>
                            </div>
                          </div>
                          <div style="text-align: center; margin: auto">
                            <img :src="selectedClothing?.image" alt="" />
                            <v-toolbar-title
                              >YOUR SELECTED PIECE</v-toolbar-title
                            >
                            PRICE - {{ selectedClothing?.price }}
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Odio cumque maiores unde totam,
                              esse eius!
                            </p>
                            <v-form ref="form" v-model="valid" lazy-validation>
                              <v-text-field
                                v-model="cardHolder"
                                label="CARD HOLDER FULL NAME"
                              ></v-text-field>
                              <v-text-field
                                v-model=" cardNumberGet"
                                label="NUMBERS OF CREDIT CARD"
                              ></v-text-field>
                              <v-text-field
                                v-model="returningCardCVV"
                                label="ENTER CVV"
                              ></v-text-field>
                              <v-text-field
                                v-model="returningCardexpires"
                                label="EXPIRES - MONTH/YEAR"
                              ></v-text-field>
                              <v-checkbox
                                v-model="checkbox"
                                :rules="[
                                  (v) => !!v || 'You must agree to continue!',
                                ]"
                                label="Are you sure you want to make this purchase"
                                required
                              ></v-checkbox>
                              <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                              >
                                BUY NOW
                              </v-btn>
                              <v-btn
                                color="error"
                                class="mr-4"
                                @click="closeDialog"
                              >
                                CANCEL
                              </v-btn>
                            </v-form>
                          </div>
                        </v-list>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Dash-board",
  data: () => ({
    checkbox: null,
    selectedClothing: null,
    valid: false,
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Catalog",
        disabled: false,
        href: "breadcrumbs_catalog",
      },
      {
        text: "Men",
        disabled: false,
        href: "breadcrumbs_men",
      },
      {
        text: "Shoes",
        disabled: false,
        href: "breadcrumbs_shoes",
      },
    ],

    // cardNumber: '',
    // cardHolder: '',
    // cvv: '',
    // expires: '',
    dialog: false,
    countOfItems: 0,
    styles: [
      { title: "Lifestyle", count: "1" },
      { title: "Running", count: "23" },
      { title: "Training & Gym", count: "45" },
      { title: "Basketball", count: "11" },
      { title: "Football", count: "15" },
      { title: "Soccer", count: "32" },
      { title: "Baseball", count: "8" },
      { title: "Golf", count: "15" },
      { title: "Skateboarding", count: "22" },
    ],
    brands: [
      { title: "Lifestyle", state: true },
      { title: "Running", state: false },
      { title: "Training & Gym", state: true },
      { title: "Basketball", state: false },
    ],
    sizes: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
    ],
    itemsOfSelect: ["All", "Sale", "Low - High", "High - Low"],
    clothes: [
      {
        class: "pa-0",
        sold: "-20%",
        image: "1.png",
        title: "RED T-SHIRT",
        price: "$ 145.00",
      },
      {
        class: "pa-0",
        sold: "-30%",
        image: "2.png",
        title: "BLUE SHIRT",
        price: "$ 599.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-17%",
        image: "3.png",
        title: "BLACK T-SHIRT",
        price: "$ 190.00",
      },

      {
        class: "pa-0",
        sold: "-22%",
        image: "4.png",
        title: "WHITE T-SHIRT",
        price: "$ 220.00",
      },
      {
        class: "pa-0",
        sold: "-18%",
        image: "5.png",
        title: "GREY T-SHIRT",
        price: "$ 235.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-40%",
        image: "6.png",
        title: "BLUE T-SHIRT",
        price: "$ 190.00",
      },

      {
        class: "pa-0",
        sold: "-13%",
        image: "7.png",
        title: "BLACK HOODIE",
        price: "$ 230.00",
      },
      {
        class: "pa-0",
        sold: "-15%",
        image: "8.png",
        title: "GREY HOODIE",
        price: "$ 185.00",
      },
      {
        class: "py-0 pl-0",
        sold: "-10%",
        image: "9.png",
        title: "YELLOW HOODIE",
        price: "$ 265.00",
      },
    ],
  }),
  methods: {
    ...mapActions(['updateCardNumber', 'updateCardHolder', 'updateCvv', 'updateExpires']),  
    selectClothing(index) {
      this.selectedClothing = this.clothes[index];
      this.countOfItems += 1;
    },
    closeDialog(){
      this.dialog = !this.closeDialog
      window.location.reload();
    }
  },
    mounted(){
      console.log(this.cardNumber)
    },
  computed: {
    ...mapState(['cardNumber', 'cardHolder', 'cvv', 'expires']),
    cardNumberGet(){
      return this.$store.getters.returningCardNumber
    },
    returningCardHolder(state){
       return state.cardHolder
        },
    returningCardCVV(state){
      return state.cvv
        },
     returningCardexpires(state){
       return state.expires
        },
  },



};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i");
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  widows: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
.credit-card {
  height: 200px;
  width: 200px;
  border: 5px soldi black;
  background: red;
}
.card__part {
  box-shadow: 1px 1px #aaa3a3;
  top: 0;
  position: absolute;
  z-index: 1000;
  left: 0;
  display: inline-block;
  width: 320px;
  height: 190px;
  background-image: url("https://e7.pngegg.com/pngimages/84/489/png-clipart-rectangle-computer-icons-square-rectangle-blue-angle.png"),
    linear-gradient(
      to right bottom,
      #fd696b,
      #fa616e,
      #f65871,
      #f15075,
      #ec4879
    ); /*linear-gradient(to right bottom, #fd8369, #fc7870, #f96e78, #f56581, #ee5d8a)*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px;
  border-radius: 8px;

  -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}

.card__front {
  padding: 18px;
  -webkit-transform: rotateY(0);
  -moz-transform: rotateY(0);
}

.card__back {
  padding: 18px 0;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
}

.card__black-line {
  margin-top: 5px;
  height: 38px;
  background-color: #303030;
}

.card__logo {
  height: 16px;
}

.card__front-logo {
  position: absolute;
  top: 18px;
  right: 18px;
}
.card__square {
  border-radius: 5px;
  height: 30px;
}

.card_numer {
  display: block;
  width: 100%;
  word-spacing: 4px;
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.card__space-75 {
  width: 75%;
  float: left;
}

.card__space-25 {
  width: 25%;
  float: left;
}

.card__label {
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
}

.card__info {
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card__back-content {
  padding: 15px 15px 0;
}
.card__secret--last {
  color: #303030;
  text-align: right;
  margin: 0;
  font-size: 14px;
}

.card__secret {
  padding: 5px 12px;
  background-color: #fff;
  position: relative;
}

.card__secret:before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  height: calc(100% + 6px);
  width: calc(100% - 42px);
  border-radius: 4px;
  background: repeating-linear-gradient(
    45deg,
    #ededed,
    #ededed 5px,
    #f9f9f9 5px,
    #f9f9f9 10px
  );
}

.card__back-logo {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.card__back-square {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.card:hover .card__front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}

.card:hover .card__back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
}
</style>
