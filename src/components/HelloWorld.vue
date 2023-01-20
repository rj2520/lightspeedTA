<template>
<div class="select-box">
 <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Select Your Make
      <small>Brand of your car</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.make"
          v-bind:items="carmake"
          label="Make"
          solo
        ></v-select>
      </v-col>
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      Select Your Model
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.model"
          :items="getModel()"
          label="Model"
          solo
        ></v-select>
      </v-col>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Select Mods
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-row align="center">
      <v-col
        cols="12"
        sm="6"
      >
     <v-subheader v-text="'Drivetrain'"></v-subheader>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.drivetrain"
          :items="drivetrain"
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          small-chips
          hint="Pick all your ebay parts"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
      <v-subheader v-text="'Chassis'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.chassis"
          :items="chassis"
          label="Select"
          multiple
          small-chips
          hint="What did you do to your shitbox"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Aerodynamic'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.areo"
          :items="areo"
          label="Select"
          multiple
          chips
          hint="Got big Wang?"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Tires'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.tires"
          :items="tires"
          label="Select"
          multiple
          chips
          hint="Cheater Tires"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Weight Savings'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.weight"
          :items="weight"
          label="Select"
          multiple
          chips
          hint="Going cheap?"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
      <v-btn
        color="primary"
        @click="e6 = 4"
      >
        Continue
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      View Your Results
    </v-stepper-step>
    <v-stepper-content step="4">
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Classification
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in categories"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
          @click="reloadPage"
          text
          >
            Reset
          </v-btn>
          <v-btn
            @click="calculateScore"
            color="primary"
            v-bind="attrs"
            v-on="on"
          >View Score</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">{{score}}</div>
              <div class="text-h4 pa-12"><a href="https://www.shopify.com/" target="_blank">Join the Challenge (to a shopify page)</a></div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-stepper-content>
  </v-stepper>
</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      carmake: [
        'BMW', 'Honda', 'Mazda'
      ],
      model: {
        'BMW': ['E36', 'E46', 'E92', 'F80'],
        'Honda': ['EG3', 'FL6', 'EP3'],
        'Mazda': ['NA Miata', 'NB Miata', 'NC Miata', 'ND Miata']
      },
      drivetrain: [
        'Ebay Turbo', 'Pick & Pull rod', 'Salvage LS',
      ],
      chassis: [
        'Home Revalve Damper', 'Junkyard surprise',
      ],
      areo: [
        'Homedepot spliter', 'Lowe wang', 'PVC duct',
      ],
      tires: [
        'cheater tires', '10 track day', 'rental tire',
      ],
      weight: [
        'no door', 'no driver seat', 'no engine'
      ],
      categories: [
        {
          name: 'Class One',
          score: '20 - 39 points',

        },
        {
          name: 'Class Two',
          score: '40 - 59 points',

        },
        {
          name: 'Class Three',
          score: '60 - 79 points',

        },
        {
          name: 'Class Four',
          score: '80 - 99 points',

        },
        {
          name: 'Class Five',
          score: '100 - 119 points',

        },
      ],
      carspec: {
        make: "",
        model: "",
        drivetrain: [],
        chassis: [],
        areo: [],
        tires: [],
        weight: [],
      },
      score:0,
      e6:1,
      e7:[],
      scoreLookupTable: {
        model: {
          'E36': 2, 'E46': 3, 'E92': 4, 'F80': 6,
          'EG3': 0, 'FL6': 1, 'EP3': 1,
          'NA Miata': 0 , 'NB Miata': 0 , 'NC Miata': 1, 'ND Miata': 2
        },
        drivetrain: {
          'Ebay Turbo': 4, 'Pick & Pull rod': 1, 'Salvage LS': 10
        },
        chassis: {
          'Home Revalve Damper': 3, 'Junkyard surprise': 2
        },
        areo: {
          'Homedepot spliter': 2, 'Lowe wang': 3, 'PVC duct': 9
        },
        tires: {
          'cheater tires': 1, '10 track day': 1, 'rental tire': 4
        },
        weight: {
         'no door': 2, 'no driver seat': 4, 'no engine': 1  
        }
      }
    }),
    methods: {
      calculateScore() {
        console.log(this.carspec)
        // Base model score
        this.score += this.scoreLookupTable.model[this.carspec.model]

        // Adding drivetain
        this.carspec.drivetrain.forEach(element => {
          this.score += this.scoreLookupTable.drivetrain[element]
        });

        // Adding chassis
        this.carspec.chassis.forEach(element => {
          this.score += this.scoreLookupTable.chassis[element]
        });

        // Adding areo
        this.carspec.areo.forEach(element => {
          this.score += this.scoreLookupTable.areo[element]
        });

        //Adding tires
        this.carspec.tires.forEach(element => {
          this.score += this.scoreLookupTable.tires[element]          
        });

        //Adding weight
        this.carspec.weight.forEach(element => {
          this.score += this.scoreLookupTable.weight[element]
        });
      },

      getModel() {
        return this.model[this.carspec.make]
      },

      reloadPage() {
        window.location.reload();
      }

    },
  }
</script>

<style>
.select-box {
  background-color: tomato;
  color: white;
  margin: 1.5rem;
  padding: 1rem;
}
</style>