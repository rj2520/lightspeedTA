<template>
<div>
  <div>
    <template>
  <div>
    <v-app-bar
      color="black"
      height="100%"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>LightSpeed Time Trial Calculator</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        href="https://www.lightspeedclub.com/"
        target="_blank"
        icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn 
        href="https://www.lightspeedclub.com/collections/all"
        target="_blank"
        icon>
        <v-icon>mdi-car</v-icon>
      </v-btn>

      <v-btn 
        href="https://www.lightspeedclub.com/pages/schedule"
        target="_blank"
        icon>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn 
        herf="https://lightspeed.motorsportreg.com/"
        target="_blank"
        icon>
        <v-icon>mdi-ticket</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
</div>
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
      &nbsp;
      <v-btn
        color="primary"
        @click="e6 = 1"
      >
        Back
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
      <v-subheader v-text="'Engine Type'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.inductype"
          :items="inductype"
          label="Select"
          multiple
          small-chips
          hint="Turbo is for..."
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
      <v-subheader v-text="'Engine'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.engine"
          :items="engine"
          label="Select"
          multiple
          small-chips
          hint="That thing looks legal"
          persistent-hint
        ></v-select>
      </v-col>
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
      <v-subheader v-text="'Suspension'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="carspec.suspension"
          :items="suspension"
          label="Select"
          multiple
          small-chips
          hint="Select all parts applied"
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
        @click="calculateScore(); e6 = 4"
      >
        Continue
      </v-btn>

      &nbsp;
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Back
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      View Your Results
    </v-stepper-step>
    <v-stepper-content step="4">
    <v-banner
      outlined
    >
      If a car accrues 20 or more points it will be bumped up in Class. There is no limit—a car with a high level of modifications might move up several Classes.
    </v-banner>
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
    <v-banner
      outlined
    >
      FORCED INDUCTION VEHICLES will add an additional five (+5) points to the total number of Modification Points to determine the final competition class.
    </v-banner>
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">

          &nbsp;
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Back
      </v-btn>
          <v-btn 
          @click="reloadPage"
          text
          >
            Reset
          </v-btn>
          <v-btn
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
              <div class="text-h2 pa-12">Base class: {{carclass}}</div>
              <div class="text-h2 pa-12">Modification point: {{score}}</div>
              <div class="text-h2 pa-12">Calculated class: {{finalclass}}</div>
              <div class="text-h4 pa-12"><a href="https://lightspeed.motorsportreg.com/" target="_blank">Join the Challenge</a></div>
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
</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      carmake: [
        'Acura', 'Alfa Roemo', 'Audi',
        'BMW',
        'Chevrolet', 'Cadillac',
        'Dodge',
        'Ferrari', 'Fait', 'Ford',
        'Honda', 'Hyundai',
        'Infiniti',
        'Lamborghini', 'Lotus', 'Lexus',
        'Maserati','Mazda', 'Mercedes', 'McLaren', 'Mini', 'Mitsubishi',
        'Nissan',
        'Pontiac','Porsche',
        'Subaru',
        'Tesla', 'Toyota',
        'VW'
      ],
      model: {
        'Acura': ['Integra 1.6L(86-89)', 'Integra 1.8L(non-VTEC)(90-93)', 'Integra 1.8(non-VTEC)(94-01)',
                  'Integra GSR', 'Integra Type-R', 'NSX 3.0L(91-96)', 'NSX', 'RSX', 'RSX-S'],
        'Alfa Roemo': ['4C', 'Giulia Quadrifoglio'],
        'Audi': ['RS4(4.2L)(AWD)(07)', 'TT', 'TT RS', 'R8(V8)', 'R8(V10)'],
        'BMW': ['M3 (E90, E92, E93)', 'M3/M4(F8X)(15)', 'M3/M4(G8X)(20)', 'M6', 'MINI Cooper S(05-10)', 'MINI Cooper Works',
                'Z3', 'Z4', '128i Coupe(08-09)', '135i Coupe(08-12)', '1M Coupe(3.0L turbo)', 'E30 Non M', 'E36 Non M', 'E46 Non M',
                '328i(07-12)(3.0L 230 hp)', '328i(07-12)(3.0L 230 hp)', '330(01-06)(225hp)', '330(06)(255hp)', '335i(07-13)(3.0L turbo)',
                'M2', 'M2 Competition/CS', 'M235i Coupe(14-15)(3.0L)', 'M3(E30)', 'M3(E36)', 'M3(E46)', 'M3(E9X)'],
        'Cadillac': ['ATSV' ,'CTS-V Gen 1', 'CTS-V Gen 2', 'CTS-V Gen 3'],
        'Chevrolet': ['Camaro ZL1&Z28 (5th Gen)', 'Camaro ZL1(6th Gen)', 'Camaro ZL1(6th Gen 1LE)', 'Camaro SS(5th Gen incl 1LE)', 'Camaro SS(6h Gen)', 'Camaro SS(6h Gen) 1LE',
                      'Corvette C5(inc. Z06)', 'Corvette C6', 'Corvette C6 Z06 & GS', 'Corvette C7 Z06', 'Corvette C7(incl Z51 & GS)', 'Corvette C7 ZR1', 'Corvette C8 / C8 Z51'],
        'Dodge': ['Viper', 'Viper ACR'],
        'Ferrari': ['355', '360', '360 Challenge','F430', '458', '488', 'ENZO'],
        'Fait': ['124', '500 Abarth'],
        'Ford': ['Fiesta ST', 'Focus ST', 'Focus RS', 'Mustang GT V8(5th gen)', 'Mustang GT V8(6th)', 'Mustang GT350',
                 'Mustang GT350R', 'Mustang GT500(S550)', 'Mustang GT500(S197)', 'GT', 'Mustang 2.3L turbo (15)','Mustang Boss 302'],
        'Honda': ['Civic & SI(Pre-05)', 'Civic & SI (06-present)', 'Civic Type R(17-Present)', 'S2000(00-08)', 'S2000(K Swap)', 'S2000 CR(2.2L)'],
        'Hyundai': ['Veloster 1.6L Turbo (13-Present)', 'Genesis 3.8L', 'Elantra/Veloster N', 'Elantra 2.0L(00-08)'],
        'Infiniti': ['G35', 'G37'],
        'Lamborghini': ['Diablo VT', 'Huracan', 'Gallardo', 'Aventador'],
        'Lotus': ['Elise(05-07)', 'Evora(10-14)', 'Exige'],
        'Lexus': ['IS250(06-08)(6sp man)', 'IS250 (AWD)(06-08)', 'IS300', 'IS F', 'GS F', 'LC500'],
        'Maserati': ['GranTurismo'],
        'Mazda': ['RX-7(FB&FC)', 'RX-7 FD', 'RX-8', 'Mazdaspeed3', 'Mazdaspeed6', 'NA', 'NB', 'NB(mazdaspeed)', 'NC', 'ND'],
        'Mercedes': ['AMG A45','C43AMG(98-00)','C55 AMG(05-06)', 'CL55 AMG(5.4L)(01-02)', 'CL65 AMG(06)', 'CLK55 AMG(04-06)', 'CLK63 AMG(07)', 'E55 AMG(03-06)',
                     'E55 AMG(99-02)', 'E63 AMG(07)', 'SL55 AMG(03-06)', 'SL55 AMG(07)', 'SL65 AMG(07)', 'SLK 320(01-04)','SLK32 AMG(02-04)','SLK 350(05-08)',
                     'SLK55 AMG(05-07)'],
        'McLaren': ['MP4-12C', '570s', '600LT', '650s', '720s', 'Senna'],
        'Mitsubishi': ['EVO VIII', 'EVO IX', 'EVO X'],
        'Nissan': ['350Z', '350Z Nismo','370Z', '370Z Nismo', 'GTR'],
        'Pontiac': ['GTO'],
        'Porsche': ['996', '997', '997 GT3', '997 Turbo AWD', '997 GT3 RS', '991 All Models',
                    '991 GT3', '991 GT3RS', '991 GT2RS', '992 All Models', '992 GT3',
                    '718 Cayman/Boxster', '981 Cayman/Boxster', 'Cayman GT4', 'Cayman GTS',
                    'Cayman/Boxster 986 S', 'Cayman/Boxster 986 Non S', 'Carrera GT',
                    'Cayman/Boxster 987 Non S', 'Cayman/Boxster 987 S', 'Cayman R 3.4L(11-12)',
                    '959', '964'],
        'Subaru': ['BRZ(gen1)', 'BRZ(gen2)', 'WRX 2.0L', 'WRX 2.5L', 'WRX STi(04-07)', 'WRX STi(08+)'],
        'Tesla': ['Model 3 SM', 'Model 3 DM', 'Model S DM', 'Model S Plaid'],
        'Toyota': ['FRS/FT86', 'GR86', 'Supra(2.0)', 'Supra(3.0)', 'Celica', 'MR2 S/2', 'MR2 Turbo'],
        'VW': ['Golf R', 'GTI 2.0L', 'Jetta 2.0L GLI(12-15)']
      },
      inductype: [
        'Naturally aspirated (0)',
        'Forced induction (5)'
    ],
      engine: [
        'Aftermarket computer system natually aspirated (3)',
        'Aftermarket computer system forced induction (10)',
        'Modification of the OEM air intake/box (1)',
        'Changing air filter location (1)',
        'Air piping to turbo/supercharger/intercooler/throttle body/cab (1)',
        'Air piping to hood/fascia/fender air inlets/outlets or vents  (1)',
        'Non-OEM, deleted, or modified/ported throttle body (2)',
        'Independent throttle bodies (4)',
        'Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)',
        'Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)',
        'Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)',
        'Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)',
        'Water injection system (alcohol-water mixtures are not permitted) (6)',
        'Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)',
        'Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)',
        'Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)',
        'Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)',
        'Add aftermarket intercooler (7)',
        'Non-OEM or modified intercooler (4)',
        'Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)',
        'Valve size change, modified, ported or polished OEM head (6)',
        'De-stroked engine (4)',
        'Added dry sump oil system (7)',
        'Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)',
        'Any modification to the OEM exhaust piping and/or catalytic converter (3)',
        'Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)'
      ],
      drivetrain: [
        'Double clutch transmissions with altered gear ratios  (6)',
        'Modify number of forward gears in transmission or altered gear ratios  (3)',
        'Added paddle/electronic shift  (3)',
        'Added limited slip differential or welded/locked differential  (3)',
        'Changed or modified limited slip differential (or welded/locked OEM LSD) (1)',
        'Added traction control (3)',
        'Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)',
        'Modification/upgrade from a fixed to a floating rear axle (3)'
      ],
      suspension: [
        'Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)',
        'Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)',
        'Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)',
        'Non-OEM or modified/re-valved shocks/struts/dampers (3)',
        'Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)',
        'Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)',
        'Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)',
        'Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)',
        'Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)',
        'Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)',
        'Non-OEM rear control arms on FWD vehicles (1)',
        'Non-OEM rear trailing arms on FWD vehicles (1)',
        'Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)',
        'Relocation of front suspension mounting points (6)',
        'Relocation of rear suspension mounting points (6)',
        'Front steering tie rod bump steer modifications or shimming of the steering rack (2)',
        'Alteration of ball joints/dive angles (2)',
        'Add panhard rod or Watts link (4)',
        'Replace or modify a OEM panhard rod or Watt’s link (2)',
        'Add torque arm (4)',
        'Replace or modify a OEM torque arm (2)',
        'Add a third link to the rear suspension that does not penetrate the floor (4)',
        'Metallic and/or spherical-design replacement suspension bushings (3)' 
      ],
      chassis: [
        'Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)', 
        'Add front lower stress/arm brace (two attachment points maximum) (1)',
        'Add a third or fourth attachment point to a front or rear strut tower bar (1)',
        'Add or modify other chassis stiffening devices or fabricated parts (3)',
        'Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)'
      ],
      areo: [
        'Add, replace, or modify front fascia and/or air dam (3)', 
        'Add, replace or modify a single flat, horizontal, front splitter (3)', 
        'Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)',
        'Add, replace, or modify rear wing and/or spoiler (4)',
        'Add or fabricate flat bottom/belly tray (5)',
        'Add rear diffuser (2)',
        'Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)',
        'Add rear vertical panels in any location (2)',
        'Add or modify side skirts (2)',
        'Add vortex generator to roof, rear window, or rear deck lid (1)',
        'Removal of the front windshield/windshield frame (7)',
        'Front side window frame air dams/diverters (2)',
        'Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)'
      ],
      tires: [
        '200TW+ NOT Including SUPER 200TW (0)',
        'SUPER 200TW: CR1/S, RT600, A052, SUR4G, V730, Rival S1.5, RE71-R/RS, Goodyear SC3 (4)',
        'SUPER 200TW: Continental ECF, Dir ZIII, 595RS-RR, Michelin cup2 connect (4)',
        '41TW - 180TW (10)',
        'Dot/Non-Dot Slicks (22)'  
      ],
      weight: [
        '5 lbs (1)', '20 lbs (2)', '35 lbs (3)', '50 lbs (4)', '65 lbs (5)',
        '80 lbs (6)', '95 lbs (7)', '110 lbs (8)', '125 lbs (9)', '140 lbs (10)',
        '155 lbs (11)', '170 lbs (12)', '185 lbs (13)', '200 lbs (14)', '215 lbs (15)',
        '230 lbs (16)', '245 lbs (17)', '260 lbs (18)', '275 lbs (19)', '290 lbs (20)',
        '305 lbs (21)', '320 lbs (22)', '335 lbs (23)', '350 lbs (24)', '365 lbs (25)',
        '380 lbs (26)', '395 lbs (27)', '410 lbs (28)', '425 lbs (29)', '440 lbs (30)',
        '455 lbs (31)', '470 lbs (32)', '485 lbs (33)', '500 lbs (34)' 
      ],
      classesScore: {'TTA': 80, 'TTB': 60, 'TTC': 40, 'TTD': 20, 'TTE': 0},
      classes: ['TTE', 'TTD', 'TTC', 'TTB', 'TTA', 'TTU', 'TTSU'],
      categories: [
        {
          name: 'Move up 1 class',
          score: '20 - 39 points',

        },
        {
          name: 'Move up 2 class',
          score: '40 - 59 points',

        },
        {
          name: 'Move up 3 class',
          score: '60 - 79 points',

        },
        {
          name: 'Move up 4 class',
          score: '80 - 99 points',

        },
        {
          name: 'Move up 5 class',
          score: '100 - 119 points',

        },
      ],
      carspec: {
        make: "",
        model: "",
        inductype: [],
        engine: [],
        drivetrain: [],
        suspension: [],
        chassis: [],
        areo: [],
        tires: [],
        weight: [],
      },
      score:0,
      carclass: null,
      finalclass: null,
      e6:1,
      e7:[],
      scoreLookupTable: {
        inductype: {
        'Naturally aspirated (0)': 0,
        'Forced induction (5)': 5
        },
        engine: {
        'Aftermarket computer system natually aspirated (3)': 3,
        'Aftermarket computer system forced induction (10)': 10,
        'Modification of the OEM air intake/box (1)': 1,
        'Changing air filter location (1)': 1,
        'Air piping to turbo/supercharger/intercooler/throttle body/cab (1)': 1,
        'Air piping to hood/fascia/fender air inlets/outlets or vents  (1)': 1,
        'Non-OEM, deleted, or modified/ported throttle body (2)': 2,
        'Independent throttle bodies (4)': 4,
        'Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)': 2,
        'Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)': 1,
        'Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)': 2,
        'Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)': 3,
        'Water injection system (alcohol-water mixtures are not permitted) (6)': 6,
        'Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)': 1,
        'Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)': 4,
        'Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)': 4,
        'Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)': 3,
        'Add aftermarket intercooler (7)': 7,
        'Non-OEM or modified intercooler (4)': 4,
        'Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)': 6,
        'Valve size change, modified, ported or polished OEM head (6)': 6,
        'De-stroked engine (4)': 4,
        'Added dry sump oil system (7)': 7,
        'Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)': 5,
        'Any modification to the OEM exhaust piping and/or catalytic converter (3)': 3,
        'Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)': 1
        },
        drivetrain: {
        'Double clutch transmissions with altered gear ratios  (6)': 6,
        'Modify number of forward gears in transmission or altered gear ratios  (3)': 3,
        'Added paddle/electronic shift  (3)': 3,
        'Added limited slip differential or welded/locked differential  (3)': 3,
        'Changed or modified limited slip differential (or welded/locked OEM LSD) (1)': 1,
        'Added traction control (3)': 3,
        'Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)': 7,
        'Modification/upgrade from a fixed to a floating rear axle (3)': 3 
        },
        suspension: {
        'Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)': 8,
        'Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)': 5,
        'Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)': 5,
        'Non-OEM or modified/re-valved shocks/struts/dampers (3)': 3,
        'Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)': 1,
        'Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)': 2,
        'Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)': 2,
        'Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)': 2,
        'Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)': 4,
        'Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)': 4,
        'Non-OEM rear control arms on FWD vehicles (1)': 1,
        'Non-OEM rear trailing arms on FWD vehicles (1)': 1,
        'Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)': 6,
        'Relocation of front suspension mounting points (6)': 6,
        'Relocation of rear suspension mounting points (6)': 6,
        'Front steering tie rod bump steer modifications or shimming of the steering rack (2)': 2,
        'Alteration of ball joints/dive angles (2)': 2,
        'Add panhard rod or Watts link (4)': 4,
        'Replace or modify a OEM panhard rod or Watt’s link (2)': 2,
        'Add torque arm (4)': 4,
        'Replace or modify a OEM torque arm (2)': 2,
        'Add a third link to the rear suspension that does not penetrate the floor (4)': 4,
        'Metallic and/or spherical-design replacement suspension bushings (3)': 3
        },
        chassis: {
        'Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)': 2, 
        'Add front lower stress/arm brace (two attachment points maximum) (1)': 1,
        'Add a third or fourth attachment point to a front or rear strut tower bar (1)': 1,
        'Add or modify other chassis stiffening devices or fabricated parts (3)': 3,
        'Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)': 6
        },
        areo: {
        'Add, replace, or modify front fascia and/or air dam (3)': 3, 
        'Add, replace or modify a single flat, horizontal, front splitter (3)': 3, 
        'Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)': 2,
        'Add, replace, or modify rear wing and/or spoiler (4)': 4,
        'Add or fabricate flat bottom/belly tray (5)': 5,
        'Add rear diffuser (2)': 2,
        'Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)': 1,
        'Add rear vertical panels in any location (2)': 2,
        'Add or modify side skirts (2)': 2,
        'Add vortex generator to roof, rear window, or rear deck lid (1)': 1,
        'Removal of the front windshield/windshield frame (7)': 7,
        'Front side window frame air dams/diverters (2)': 2,
        'Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)': 5
        },
        tires: {
        '200TW+ NOT Including SUPER 200TW (0)': 0,
        'SUPER 200TW: CR1/S, RT600, A052, SUR4G, V730, Rival S1.5, RE71-R/RS, Goodyear SC3 (4)': 4,
        'SUPER 200TW: Continental ECF, Dir ZIII, 595RS-RR, Michelin cup2 connect (4)': 4,
        '41TW - 180TW (10)': 10,
        'Dot/Non-Dot Slicks (22)': 22  
        },
        weight: {
        '5 lbs (1)': 1, '20 lbs (2)': 2, '35 lbs (3)': 3, '50 lbs (4)': 4, '65 lbs (5)': 5,
        '80 lbs (6)': 6, '95 lbs (7)': 7, '110 lbs (8)': 8, '125 lbs (9)': 9, '140 lbs (10)': 10,
        '155 lbs (11)': 11, '170 lbs (12)': 12, '185 lbs (13)': 13, '200 lbs (14)': 14, '215 lbs (15)': 15,
        '230 lbs (16)': 16, '245 lbs (17)': 17, '260 lbs (18)': 18, '275 lbs (19)': 19, '290 lbs (20)': 20,
        '305 lbs (21)': 21, '320 lbs (22)': 22, '335 lbs (23)': 23, '350 lbs (24)': 24, '365 lbs (25)': 25,
        '380 lbs (26)': 26, '395 lbs (27)': 27, '410 lbs (28)': 28, '425 lbs (29)': 29, '440 lbs (30)': 30,
        '455 lbs (31)': 31, '470 lbs (32)': 32, '485 lbs (33)': 33, '500 lbs (34)': 34 
        }
      },
      classLookupTable: {
        'Integra 1.6L(86-89)': 'TTE', 'Integra 1.8L(non-VTEC)(90-93)': 'TTE', 'Integra 1.8(non-VTEC)(94-01)': 'TTE',
        'Integra GSR': 'TTE', 'Integra Type-R': 'TTD', 'NSX 3.0L(91-96)': 'TTC', 'NSX': 'TTC', 'RSX': 'TTE', 'RSX-S':'TTD', 
        '4C': 'TTC', 'Giulia Quadrifoglio': 'TTB',
        'RS4(4.2L)(AWD)(07)': 'TTB', 'TT': 'TTB', 'TT RS': 'TTB', 'R8(V8)': 'TTA', 'R8(V10)':'TTU',
        'M3 (E90, E92, E93)':'TTB', 'M3/M4(F8X)(15)':'TTA', 'M3/M4(G8X)(20)':'TTA', 'M6':'TTA', 'MINI Cooper S(05-10)':'TTE', 'MINI Cooper Works':'TTD',
        'Z3':'TTD', 'Z4':'TTD', '128i Coupe(08-09)':'TTD', '135i Coupe(08-12)':'TTC', '1M Coupe(3.0L turbo)':'TTB', 'E30 Non M':'TTE', 'E36 Non M':'TTE', 'E46 Non M':'TTD',
        '328i(07-12)(3.0L 230 hp)':'TTE', '328i(12-14)(3.0L 230 hp)':'TTD', '330(01-06)(225hp)':'TTE', '330(06)(255hp)':'TTD', '335i(07-13)(3.0L turbo)':'TTC',
        'M2':'TTA', 'M2 Competition/CS':'TTA', 'M235i Coupe(14-15)(3.0L)':'TTC', 'M3(E30)':'TTE', 'M3(E36)':'TTD', 'M3(E46)':'TTC', 'M3(E9X)':'TTB',
        'ATSV':'TTA' ,'CTS-V Gen 1':'TTC', 'CTS-V Gen 2':'TTA', 'CTS-V Gen 3':'TTA',
        'Camaro ZL1&Z28 (5th Gen)':'TTA', 'Camaro ZL1(6th Gen)':'TTA', 'Camaro ZL1(6th Gen 1LE)':'TTU', 'Camaro SS(5th Gen incl 1LE)':'TTB', 'Camaro SS(6h Gen)':'TTB', 'Camaro SS(6h Gen) 1LE':'TTA',
        'Corvette C5(inc. Z06)':'TTA', 'Corvette C6':'TTA', 'Corvette C6 Z06 & GS':'TTA', 'Corvette C7 Z06':'TTU', 'Corvette C7(incl Z51 & GS)':'TTA', 'Corvette C7 ZR1':'TTU', 'Corvette C8 / C8 Z51':'TTA',
        'Viper': 'TTA', 'Viper ACR': 'TTU',
        '355':'TTA', '360':'TTA', '360 Challenge':'TTU','F430':'TTU', '458':'TTU', '488':'TTU', 'ENZO':'TTU', 
        '124': 'TTE', '500 Abarth': 'TTE',
        'Fiesta ST':'TTE', 'Focus ST':'TTD', 'Focus RS':'TTB', 'Mustang GT V8(5th gen)':'TTB', 'Mustang GT V8(6th)':'TTB', 'Mustang GT350':'TTA',
        'Mustang GT350R':'TTU', 'Mustang GT500(S550)':'TTU', 'Mustang GT500(S197)':'TTU', 'GT':'TTU', 'Mustang 2.3L turbo (15)':'TTB','Mustang Boss 302':'TTA',
        'Civic & SI(Pre-05)': 'TTD', 'Civic & SI (06-present)':'TTC', 'Civic Type R(17-Present)':'TTC', 'S2000(00-08)':'TTD', 'S2000(K Swap)':'TTD', 'S2000 CR(2.2L)':'TTD',
        'Veloster 1.6L Turbo (13-Present)':'TTE', 'Genesis 3.8L':'TTE', 'Elantra/Veloster N':'TTC', 'Elantra 2.0L(00-08)':'TTE',
        'G35':'TTD', 'G37':'TTC',
        'Diablo VT':'TTU', 'Huracan':'TTU', 'Gallardo':'TTU', 'Aventador':'TTU',
        'Elise': 'TTC', 'Evora': 'TTC', 'Exige': 'TTA',
        'GranTurismo': 'TTB',
        'IS250(06-08)(6sp man)':'TTE', 'IS250 (AWD)(06-08)':'TTE', 'IS300':'TTE', 'IS F':'TTB', 'GS F':'TTB', 'LC500':'TTA',
        'RX-7(FB&FC)':'TTC', 'RX-7 FD':'TTD', 'RX-8':'TTC', 'Mazdaspeed3':'TTD', 'Mazdaspeed6':'TTD', 'NA':'TTE', 'NB':'TTE', 'NB(mazdaspeed)':'TTE', 'NC':'TTE', 'ND':'TTE',
        'AMG A45':'TTA','C43AMG(98-00)':'TTC','C55 AMG(05-06)':'TTC', 'CL55 AMG(5.4L)(01-02)':'TTC', 'CL65 AMG(06)':'TTA', 'CLK55 AMG(04-06)':'TTC', 'CLK63 AMG(07)':'TTA', 'E55 AMG(03-06)':'TTB',
        'E55 AMG(99-02)':'TTC', 'E63 AMG(07)':'TTA', 'SL55 AMG(03-06)':'TTB', 'SL55 AMG(07)':'TTB', 'SL65 AMG(07)':'TTA', 'SLK 320(01-04)':'TTE','SLK32 AMG(02-04)':'TTB','SLK 350(05-08)':'TTC',
        'SLK55 AMG(05-07)':'TTB',
        'MP4 12C': 'TTU', '570s': 'TTU', '600LT': 'TTU', '650s': 'TTU', '720s': 'TTU', 'Senna': 'TTX',
        'EVO VIII': 'TTB', 'EVO IX': 'TTB', 'EVO X': 'TTB',
        '350Z':'TTC', '350Z Nismo':'TTB','370Z':'TTB', '370Z Nismo':'TTA', 'GTR':'TTU',
        'GTO':'TTC',
        '996':'TTB', '997':'TTA', '997 GT3':'TTA', '997 Turbo AWD':'TTA', '997 GT3 RS':'TTU', '991 All Models':'TTA',
        '991 GT3':'TTU', '991 GT3RS':'TTU', '991 GT2RS':'TTU', '992 All Models':'TTA', '992 GT3':'TTU',
        '718 Cayman/Boxster':'TTA', '981 Cayman/Boxster':'TTA', 'Cayman GT4':'TTA', 'Cayman GTS':'TTA',
        'Cayman/Boxster 986 S':'TTC', 'Cayman/Boxster 986 Non S':'TTC', 'Carrera GT':'TTU',
        'Cayman/Boxster 987 Non S':'TTB', 'Cayman/Boxster 987 S':'TTB', 'Cayman R 3.4L(11-12)':'TTA',
        '959':'TTA', '964':'TTD',
        'BRZ(gen1)': 'TTD', 'BRZ(gen2)': 'TTD', 'WRX 2.0L':'TTB', 'WRX 2.5L':'TTD', 'WRX STi(04-07)':'TTB', 'WRX STi(08+)':'TTB',
        'Model 3 SM': 'TTC', 'Model 3 DM':'TTB', 'Model S DM':'TTB', 'Model S Plaid':'TTA',
        'FRS/FT86':'TTD', 'GR86':'TTD', 'Supra(2.0)':'TTB', 'Supra(3.0)':'TTA', 'Celica':'TTE', 'MR2 S/2':'TTE', 'MR2 Turbo':'TTE',
        'Golf R':'TTD', 'GTI 2.0L':'TTD', 'Jetta 2.0L GLI(12-15)':'TTE'
      },
      oneStarModel: ['RSX', 'Giulia Quadrifoglio','RS4(4.2L)(AWD)(07)', 'TT RS','M3/M4(G8X)(20)', 'MINI Cooper Works', 'E36 Non M',
                     '328i(07-12)(3.0L 230 hp)', '335i(07-13)(3.0L turbo)', 'M2 Competition / CS', 'M3(E36)','M3(E30)', 'CTS-V Gen 2',
                     'Camaro ZL1&Z28 (5th Gen)', 'Camaro SS(5th Gen incl 1LE)','Corvette C6 Z06 & GS', 'Corvette C7(incl Z51 & GS)',
                     'Corvette C7 ZR1','Corvette C8 / C8 Z51', 'Viper ACR', '500 Abarth', 'Mustang GT V8(6th)','Focus RS', 'Civic & SI(Pre-05)',
                     'S2000(K Swap)','Genesis 3.8L','IS250 (AWD)(06-08)','IS F','GS F', 'IS300', 'Mazdaspeed3', 'Mazdaspeed6',
                     'NB(mazdaspeed)', 'NC', '600LT', '650s', '720s', 'E55 AMG(03-06)', 'E55 AMG(99-02)', 'SL55 AMG(03-06)','SLK 320(01-04)',
                     'SLK32 AMG(02-04)','EVO IX', '350Z', 'GTO', '997 Turbo AWD', '991 All Models', '991 GT3RS', '992 All Models', '992 GT3',
                     '718 Cayman/Boxster', 'Cayman/Boxster 986 S', 'Cayman/Boxster 987 Non S', '964', 'BRZ(gen2)', 'WRX 2.5L', 'Celica','MR2 S/2', 
                     'Supra(2.0)', 'GR86', 'Jetta 2.0L GLI(12-15)'],
      twoStarModel: ['NSX 3.0L(91-96)', 'NSX', 'R8(V8)', 'M3 (E90, E92, E93)','MINI Cooper S(05-10)', 'Z4', '135i Coupe(08-12)',
                     '1M Coupe(3.0L turbo)', 'M235i Coupe(14-15)(3.0L)', 'M3(E46)','M3(E9X)', 'CTS-V Gen 1', 'CTS-V Gen 3',
                     'Camaro ZL1 (6th Gen)', 'Camaro SS(6h Gen)', 'Viper', 'Mustang GT350', 'Fiesta ST', 'Focus ST','S2000 CR(2.2L)',
                     'G35', 'G37', 'Elise', 'Evora', 'RX-7(FB&FC)', 'ND','C55 AMG(05-06)', 'EVO X', '370Z', '996', '997 GT3','991 GT2RS',
                     'Cayman GT4', 'Cayman/Boxster 987 S', 'WRX STi(08+)', 'MR2 Turbo']
    }),
    methods: {
      calculateScore() {
        console.log(this.carspec)
        
        // Look up if model needs extra points penalty
        if (this.oneStarModel.includes(this.carspec.model)) {
          this.score += 7;
        }

        if (this.twoStarModel.includes(this.carspec.model)) {
          this.score += 14;
        }

        // Adding engine type socre:
        this.carspec.inductype.forEach(element => {
          this.score += this.scoreLookupTable.inductype[element]
        }); 

        // Adding engine
        this.carspec.engine.forEach(element => {
          this.score += this.scoreLookupTable.engine[element]
        });

        // Adding drivetain
        this.carspec.drivetrain.forEach(element => {
          this.score += this.scoreLookupTable.drivetrain[element]
        });

        //Adding suspension
        this.carspec.suspension.forEach(element => {
          this.score += this.scoreLookupTable.suspension[element]
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

        //Getting base car class
        this.carclass = this.classLookupTable[this.carspec.model]
        //Getting final car class
        var totalscore = this.score + this.classesScore[this.carclass]
        var level = parseInt(totalscore/20)
        if (level > 5){
          this.finalclass = 'TTSU'
        }
        else{
          this.finalclass = this.classes[level]
        }
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
  background-color: black;
  color: rgb(36, 224, 99);
  margin: 1.2rem;
  padding: 1rem;
  border-radius: 1.2rem;
}
</style>