(function(){"use strict";var e={4993:function(e,o,t){var r=t(144),a=t(1096),s=t(3551),i=function(){var e=this,o=e._self._c;return o(a.Z,[o(s.Z,[o("light-speed")],1)],1)},n=[],l=t(9203),c=t(8983),d=t(4546),T=t(1828),p=t(3058),u=t(5223),h=t(4437),m=t(5452),f=t(5057),g=t(5294),b=t(8129),M=t(4397),C=t(3347),R=t(1212),A=t(4562),E=t(5891),v=t(2680),S=t(1002),k=t(2370),y=function(){var e=this,o=e._self._c;return o("div",[o("div",[[o("div",[o(l.Z,{attrs:{color:"black",height:"100%",dense:"",dark:""}},[o(c.Z),o(k.qW,[e._v("LightSpeed Time Trial Calculator")]),o(C.Z),o(T.Z,{attrs:{href:"https://www.lightspeedclub.com/",target:"_blank",icon:""}},[o(f.Z,[e._v("mdi-home")])],1),o(T.Z,{attrs:{href:"https://www.lightspeedclub.com/collections/all",target:"_blank",icon:""}},[o(f.Z,[e._v("mdi-car")])],1),o(T.Z,{attrs:{href:"https://www.lightspeedclub.com/pages/schedule",target:"_blank",icon:""}},[o(f.Z,[e._v("mdi-calendar")])],1),o(T.Z,{attrs:{herf:"https://lightspeed.motorsportreg.com/",target:"_blank",icon:""}},[o(f.Z,[e._v("mdi-ticket")])],1)],1)],1)]],2),o("div",{staticClass:"select-box"},[o(R.Z,{attrs:{vertical:""},model:{value:e.e6,callback:function(o){e.e6=o},expression:"e6"}},[o(E.Z,{attrs:{complete:e.e6>1,step:"1"}},[e._v(" Select Your Make "),o("small",[e._v("Brand of your car")])]),o(A.Z,{attrs:{step:"1"}},[o(h.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.carmake,label:"Make",solo:""},model:{value:e.carspec.make,callback:function(o){e.$set(e.carspec,"make",o)},expression:"carspec.make"}})],1),o(T.Z,{attrs:{color:"primary"},on:{click:function(o){e.e6=2}}},[e._v(" Continue ")])],1),o(E.Z,{attrs:{complete:e.e6>2,step:"2"}},[e._v(" Select Your Model ")]),o(A.Z,{attrs:{step:"2"}},[o(h.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.getModel(),label:"Model",solo:""},model:{value:e.carspec.model,callback:function(o){e.$set(e.carspec,"model",o)},expression:"carspec.model"}})],1),o(T.Z,{attrs:{color:"primary"},on:{click:function(o){e.e6=3}}},[e._v(" Continue ")])],1),o(E.Z,{attrs:{complete:e.e6>3,step:"3"}},[e._v(" Select Mods ")]),o(A.Z,{attrs:{step:"3"}},[o(g.Z,{attrs:{align:"center"}},[o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Engine")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.engine,label:"Select",multiple:"","small-chips":"",hint:"That thing looks legal","persistent-hint":""},model:{value:e.carspec.engine,callback:function(o){e.$set(e.carspec,"engine",o)},expression:"carspec.engine"}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Drivetrain")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.drivetrain,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","small-chips":"",hint:"Pick all your ebay parts","persistent-hint":""},model:{value:e.carspec.drivetrain,callback:function(o){e.$set(e.carspec,"drivetrain",o)},expression:"carspec.drivetrain"}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Suspension")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.suspension,label:"Select",multiple:"","small-chips":"",hint:"Select all parts applied","persistent-hint":""},model:{value:e.carspec.suspension,callback:function(o){e.$set(e.carspec,"suspension",o)},expression:"carspec.suspension"}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Chassis")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.chassis,label:"Select",multiple:"","small-chips":"",hint:"What did you do to your shitbox","persistent-hint":""},model:{value:e.carspec.chassis,callback:function(o){e.$set(e.carspec,"chassis",o)},expression:"carspec.chassis"}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Aerodynamic")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.areo,label:"Select",multiple:"",chips:"",hint:"Got big Wang?","persistent-hint":""},model:{value:e.carspec.areo,callback:function(o){e.$set(e.carspec,"areo",o)},expression:"carspec.areo"}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Tires")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.tires,label:"Select",multiple:"",chips:"",hint:"Cheater Tires","persistent-hint":""},model:{value:e.carspec.tires,callback:function(o){e.$set(e.carspec,"tires",o)},expression:"carspec.tires"}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(v.Z,{domProps:{textContent:e._s("Weight Savings")}})],1),o(h.Z,{attrs:{cols:"12",sm:"6"}},[o(b.Z,{attrs:{items:e.weight,label:"Select",multiple:"",chips:"",hint:"Going cheap?","persistent-hint":""},model:{value:e.carspec.weight,callback:function(o){e.$set(e.carspec,"weight",o)},expression:"carspec.weight"}})],1)],1),o(T.Z,{attrs:{color:"primary"},on:{click:function(o){e.calculateScore(),e.e6=4}}},[e._v(" Continue ")])],1),o(E.Z,{attrs:{step:"4"}},[e._v(" View Your Results ")]),o(A.Z,{attrs:{step:"4"}},[o(d.Z,{attrs:{outlined:""}},[e._v(" If a car accrues 20 or more points it will be bumped up in Class. There is no limit—a car with a high level of modifications might move up several Classes. ")]),o(M.Z,{scopedSlots:e._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[e._v(" Name ")]),o("th",{staticClass:"text-left"},[e._v(" Classification ")])])]),o("tbody",e._l(e.categories,(function(t){return o("tr",{key:t.name},[o("td",[e._v(e._s(t.name))]),o("td",[e._v(e._s(t.score))])])})),0)]},proxy:!0}])}),o(d.Z,{attrs:{outlined:""}},[e._v(" FORCED INDUCTION VEHICLES will add an additional five (+5) points to the total number of Modification Points to determine the final competition class. ")]),o(m.Z,{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function({on:t,attrs:r}){return[o(T.Z,{attrs:{text:""},on:{click:e.reloadPage}},[e._v(" Reset ")]),o(T.Z,e._g(e._b({attrs:{color:"primary"}},"v-btn",r,!1),t),[e._v("View Score")])]}},{key:"default",fn:function(t){return[o(p.Z,[o(S.Z,{attrs:{color:"primary",dark:""}},[e._v("Opening from the top")]),o(u.ZB,[o("div",{staticClass:"text-h2 pa-12"},[e._v("Base class: "+e._s(e.carclass))]),o("div",{staticClass:"text-h2 pa-12"},[e._v("Modification point: "+e._s(e.score))]),o("div",{staticClass:"text-h2 pa-12"},[e._v("Calculated class: "+e._s(e.finalclass))]),o("div",{staticClass:"text-h4 pa-12"},[o("a",{attrs:{href:"https://lightspeed.motorsportreg.com/",target:"_blank"}},[e._v("Join the Challenge")])])]),o(u.h7,{staticClass:"justify-end"},[o(T.Z,{attrs:{text:""},on:{click:function(e){t.value=!1}}},[e._v("Close")])],1)],1)]}}])})],1)],1)],1)])},w=[],G={name:"HelloWorld",data:()=>({carmake:["Acura","Alfa Roemo","Audi","BMW","Chevrolet","Cadillac","Dodge","Ferrari","Fait","Ford","Honda","Hyundai","Lamborghini","Lotus","Lexus","Mazda","Mercedes","McLaren","Mini","Mitsubishi","Nissan","Porsche","Subaru","Tesla","Toyota","VW"],model:{Acura:["ILX 2.4L(13)","Integra 1.6L(86-89)","Integra 1.8L(non-VTEC)(90-93)","Integra 1.8(non-VTEC)(94-01)","Integra GSR","Integra Type-R","NSX 3.0L(91-96)","NSX","RSX","RSX-S"],"Alfa Roemo":["4C","Giulia Quadrifoglio"],Audi:["S4(03-07)(AWD)","RS4(4.2L)(AWD)(07)","TT(180hp)(00-06)","TT(225hp)(02-06)(AWD)","TT(250hp)(04-06)","TT Quatro 3.2L (08-09)(AWD)","TTS(09-15)(AWD)(Turbo)","TTRS 2.5 Coupe (12-13)(AWD)","R8(V8)","R8(V10)"],BMW:["128i Coupe(08-09)","135i Coupe(08-12)","328i(E36)","328i(E46)","328i(12-14)(2.0Lturbo)","335i(07-13)(3.0)turbo","M2","M2CS","M235","M240","M3(E30)","M3(E36)","M3(E46)","M3(E90,E92,E93)","M3/M4(F8X)","M3/M4(G8X)","M5 E28 E34(85-93)","M5 E39","M5 E60","M6","Z4"],Cadillac:["CTS-V(04-07)","CTS-V(09-11)"],Chevrolet:["Camaro SS(5th gen)","Camaro SS(6th gen)","Corvette C4","Corvette C5","Corvette C6","Corvette C7","Corvette C7 Z06","Corvette C7 ZR-1","Corvette C8"],Dodge:["Challenger R/T","Challenger SRT8","Charger 5.7L","Charger SRT8","Viper","Viper ACR"],Ferrari:["308","328","355","360","F430","458","488","F12"],Fait:["124","500 Abarth"],Ford:["Fiesta ST","Focus ST","Focus RS","Mustang GT V8(5th gen)","Mustang GT V8(6th)","Mustang GT350","Mustang GT350R","Mustang GT500"],Honda:["Accord 3.0 V6","Accord 3.5 V6","Civic Si","Civic Type R(FK8/FL5)","Fit","S2000(00-08)","S2000(K Swap)","S2000 CR(2.2L)"],Hyundai:["Genesis","Veloster N","Elantra N","Kona N"],Lamborghini:["Huracan","Gallardo","Aventador","Urus"],Lotus:["Elise","Evora","Exige"],Lexus:["IS F","GS F","LC500"],Mazda:["Mazdaspeed3(07-09)","Mazdaspeed3(10-13)","Mazdaspeed6(06-07)","Miata 1.6L","Miata 1.8L","Miata 1.8L VVT","Miata NC","Miata ND","Miata Mazdaspeed","RX7 13B","RX-7 TT(3rd gen)","RX-8(04-08)","RX-8(09-11)","RX-8 R3(09-11)","RX-8(197hp)(Auto)(04-05)","RX-8(212hp)(Auto)(06-07)"],Mercedes:["C43AMG","C63AMG","E55AMG","E63AMG","GT","GTs","SLS"],McLaren:["MP4 12C","570s","600LT","650s","720s","Senna"],Mini:["Cooper S(02-04)","Cooper S(05-10)","Cooper S(F56)"],Mitsubishi:["EVO VIII","EVO IX","EVO X"],Nissan:["240Z","300ZX","350Z","370Z","400Z","GTR"],Porsche:["964","993","996","996GT3","997.1","997.2","997 Turbo","997.1 GT3","997.2 GT3","997 GT3RS","991.1","991.2","991.1 GT3","991.2 GT3","991 Turbo","991 GT3RS","991 GT2RS","992","992 Turbo","992 GT3","Cayman/Boxster 718","Cayman/Boxster 981","Cayman/Boxter GTS","Cayman 981 GT4","718 GT4"],Subaru:["BRZ(gen1)","BRZ(gen2)","STI","WRX","WRX(02-08)"],Tesla:["Model 3","Model 3 Dual Motor","Model S","Model S Plaid"],Toyota:["FRS/FT86","GR86","Supra(2.0)","Supra(3.0)","GR Corolla","Celica GT-S","MR2 (gen1)","MR2 2.2L DOCH","MR2 SC","MR2 Turbo"],VW:["GTI(06-09)","GTI(10-14)","GTI(15)","GTI(19)","GOLF R32","GOLF R(12-13)","GOLF R(15)","GOLF R(19)"]},engine:["Aftermarket computer system natually aspirated (3)","Aftermarket computer system forced induction (10)","Modification of the OEM air intake/box (1)","Changing air filter location (1)","Air piping to turbo/supercharger/intercooler/throttle body/cab (1)","Air piping to hood/fascia/fender air inlets/outlets or vents  (1)","Non-OEM, deleted, or modified/ported throttle body (2)","Independent throttle bodies (4)","Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)","Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)","Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)","Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)","Water injection system (alcohol-water mixtures are not permitted) (6)","Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)","Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)","Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)","Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)","Add aftermarket intercooler (7)","Non-OEM or modified intercooler (4)","Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)","Valve size change, modified, ported or polished OEM head (6)","De-stroked engine (4)","Added dry sump oil system (7)","Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)","Any modification to the OEM exhaust piping and/or catalytic converter (3)","Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)"],drivetrain:["Double clutch transmissions with altered gear ratios  (6)","Modify number of forward gears in transmission or altered gear ratios  (3)","Added paddle/electronic shift  (3)","Added limited slip differential or welded/locked differential  (3)","Changed or modified limited slip differential (or welded/locked OEM LSD) (1)","Added traction control (3)","Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)","Modification/upgrade from a fixed to a floating rear axle (3)"],suspension:["Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)","Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)","Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)","Non-OEM or modified/re-valved shocks/struts/dampers (3)","Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)","Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)","Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)","Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)","Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)","Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)","Non-OEM rear control arms on FWD vehicles (1)","Non-OEM rear trailing arms on FWD vehicles (1)","Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)","Relocation of front suspension mounting points (6)","Relocation of rear suspension mounting points (6)","Front steering tie rod bump steer modifications or shimming of the steering rack (2)","Alteration of ball joints/dive angles (2)","Add panhard rod or Watts link (4)","Replace or modify a OEM panhard rod or Watt’s link (2)","Add torque arm (4)","Replace or modify a OEM torque arm (2)","Add a third link to the rear suspension that does not penetrate the floor (4)","Metallic and/or spherical-design replacement suspension bushings (3)"],chassis:["Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)","Add front lower stress/arm brace (two attachment points maximum) (1)","Add a third or fourth attachment point to a front or rear strut tower bar (1)","Add or modify other chassis stiffening devices or fabricated parts (3)","Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)"],areo:["Add, replace, or modify front fascia and/or air dam (3)","Add, replace or modify a single flat, horizontal, front splitter (3)","Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)","Add, replace, or modify rear wing and/or spoiler (4)","Add or fabricate flat bottom/belly tray (5)","Add rear diffuser (2)","Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)","Add rear vertical panels in any location (2)","Add or modify side skirts (2)","Add vortex generator to roof, rear window, or rear deck lid (1)","Removal of the front windshield/windshield frame (7)","Front side window frame air dams/diverters (2)","Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)"],tires:["The following DOT-approved R-compound tires: BFG R1S, Goodyear Eagle RS AC (auto- cross), Hoosier A7, Hankook Z214 (C90 & C91 compounds only), Hoosier Wet DOT (22)","The following DOT-approved R-compound tires and those with a UTQG treadwear rating of 40 or less not listed otherwise in these rules: BFG R1, Goodyear Eagle RS (10)","Hankook Z214, Hoosier R7, Kumho V710, Yokohama A055 (10)","BFGoodrich g-Force Rival, Cooper RS3-R, Maxxis Victra RC-1, Michelin Pilot Sport 4S (6)"," Nankang AR-1, Nitto NT01, Toyo Proxes R888/R888R/RA-1/RR (6)","Bridgestone Potenza RE-71R/RE-71RS, BFGoodrich g-Force Rival S, Continental ExtremeContact Force, Dunlop Direzza ZII (3)","Falken Azenis RT615K+, Falken Azenis RT660, Maxxis Victra VR-1, Federa 595 RS-RR (3)","Goodyear Eagle F1 SuperCar 3, Hankook Ventus RS4, Kumho ECSTA V720/V730, Michelin Sport Cup 2 Connect (3)","Nankang CR-S/NS-2R, Nexen Nfera SUR4G, Yokohama Advan AD09/A052, Valino VR08GP, Toyo Proxes R1R (3)"],weight:["5 lbs (1)","20 lbs (2)","35 lbs (3)","50 lbs (4)","65 lbs (5)","80 lbs (6)","95 lbs (7)","110 lbs (8)","125 lbs (9)","140 lbs (10)","155 lbs (11)","170 lbs (12)","185 lbs (13)","200 lbs (14)","215 lbs (15)","230 lbs (16)","245 lbs (17)","260 lbs (18)","275 lbs (19)","290 lbs (20)","305 lbs (21)","320 lbs (22)","335 lbs (23)","350 lbs (24)","365 lbs (25)","380 lbs (26)","395 lbs (27)","410 lbs (28)","425 lbs (29)","440 lbs (30)","455 lbs (31)","470 lbs (32)","485 lbs (33)","500 lbs (34)"],classesScore:{TTA:80,TTB:60,TTC:40,TTD:20,TTE:0},classes:["TTE","TTD","TTC","TTB","TTA","TTU","TTSU"],categories:[{name:"Move up 1 class",score:"20 - 39 points"},{name:"Move up 2 class",score:"40 - 59 points"},{name:"Move up 3 class",score:"60 - 79 points"},{name:"Move up 4 class",score:"80 - 99 points"},{name:"Move up 5 class",score:"100 - 119 points"}],carspec:{make:"",model:"",engine:[],drivetrain:[],suspension:[],chassis:[],areo:[],tires:[],weight:[]},score:0,carclass:null,finalclass:null,e6:1,e7:[],scoreLookupTable:{engine:{"Aftermarket computer system natually aspirated (3)":3,"Aftermarket computer system forced induction (10)":10,"Modification of the OEM air intake/box (1)":1,"Changing air filter location (1)":1,"Air piping to turbo/supercharger/intercooler/throttle body/cab (1)":1,"Air piping to hood/fascia/fender air inlets/outlets or vents  (1)":1,"Non-OEM, deleted, or modified/ported throttle body (2)":2,"Independent throttle bodies (4)":4,"Non-OEM or modified carburetor, fuel rail, fuel injectors, fuel pump(s), and/or fuel pressure regulator (2)":2,"Non-OEM, modified/ported, or deleted intake manifold: 4 cyl (1)":1,"Non-OEM, modified/ported, or deleted intake manifold: 6 cyl (2)":2,"Non-OEM, modified/ported, or deleted intake manifold: 8 cyl (3)":3,"Water injection system (alcohol-water mixtures are not permitted) (6)":6,"Replacement pulleys (other than for supercharger) or non-electrical fan removal (1)":1,"Replacement pulley for OEM supercharger or replacement of any pulley that affects OEM supercharger speed (4)":4,"Aftermarket boost controller or modification/alteration of OEM vacuum lines that serve to function as a boost controller (4)":4,"Aftermarket or modified wastegate actuator, wastegate, or vacuum line(s) that serve to control the wastegate actuator function or increase peak boost (3)":3,"Add aftermarket intercooler (7)":7,"Non-OEM or modified intercooler (4)":4,"Modified or non-OEM camshaft(s), rocker arms, push rods, lifters, or cam timing gears (6)":6,"Valve size change, modified, ported or polished OEM head (6)":6,"De-stroked engine (4)":4,"Added dry sump oil system (7)":7,"Modification, porting, or replacement of the BMT exhaust manifold or header(s) (5)":5,"Any modification to the OEM exhaust piping and/or catalytic converter (3)":3,"Non-OEM or modified resonator(s) or muffler(s) only (no exhaust piping modifications)  (1)":1},drivetrain:{"Double clutch transmissions with altered gear ratios  (6)":6,"Modify number of forward gears in transmission or altered gear ratios  (3)":3,"Added paddle/electronic shift  (3)":3,"Added limited slip differential or welded/locked differential  (3)":3,"Changed or modified limited slip differential (or welded/locked OEM LSD) (1)":1,"Added traction control (3)":3,"Relocation of engine/transmission between 1 and 10 inches of the OEM location (7)":7,"Modification/upgrade from a fixed to a floating rear axle (3)":3},suspension:{"Non-OEM shocks/struts/dampers with an external reservoir or more than two ranges of adjustment (8)":8,"Non-OEM shocks/struts/dampers with a “Piggy Back” external reservoir (5)":5,"Non-OEM shocks/struts/dampers with shaft diameter 40mm or greater (5)":5,"Non-OEM or modified/re-valved shocks/struts/dampers (3)":3,"Changing the mounting orientation/design of the OEM shock and/or spring perch in order to invert the front shocks/struts (1)":1,"Non-OEM or modified coil springs, bump stops, leaf springs/spacers/brackets, or torsion bars (2)":2,"Conversion of torsion bar/leaf spring to coil spring and strut/shock suspension (2)":2,"Add, replace, remove, or modify anti-roll bars (“sway” bars—front, rear, or both) or end links (2)":2,"Non-OEM driver/cockpit adjustable sway bar or suspension settings (4)":4,"Replace, modify, or remove control arms or RWD/AWD rear trailing arms (4)":4,"Non-OEM rear control arms on FWD vehicles (1)":1,"Non-OEM rear trailing arms on FWD vehicles (1)":1,"Using the alternate control arm mounting location on cars equipped OEM with multiple choices (6)":6,"Relocation of front suspension mounting points (6)":6,"Relocation of rear suspension mounting points (6)":6,"Front steering tie rod bump steer modifications or shimming of the steering rack (2)":2,"Alteration of ball joints/dive angles (2)":2,"Add panhard rod or Watts link (4)":4,"Replace or modify a OEM panhard rod or Watt’s link (2)":2,"Add torque arm (4)":4,"Replace or modify a OEM torque arm (2)":2,"Add a third link to the rear suspension that does not penetrate the floor (4)":4,"Metallic and/or spherical-design replacement suspension bushings (3)":3},chassis:{"Non-OEM, modified, or relocated brake calipers and/or brake caliper brackets and/or brake rotor diameter (2)":2,"Add front lower stress/arm brace (two attachment points maximum) (1)":1,"Add a third or fourth attachment point to a front or rear strut tower bar (1)":1,"Add or modify other chassis stiffening devices or fabricated parts (3)":3,"Increase in track width greater than four (4) inches due to non-OEM axles, control arms, brake rotors/hats, wheel spacers, hubs, wheel offset, and/or camber adjustment (6)":6},areo:{"Add, replace, or modify front fascia and/or air dam (3)":3,"Add, replace or modify a single flat, horizontal, front splitter (3)":3,"Add or modify canards/winglets (includes portions of an added/modified/replaced fascia that provide a downward force (2)":2,"Add, replace, or modify rear wing and/or spoiler (4)":4,"Add or fabricate flat bottom/belly tray (5)":5,"Add rear diffuser (2)":2,"Replace or modify OEM rear diffuser, rear bumper cover, or rear “fascia” (1)":1,"Add rear vertical panels in any location (2)":2,"Add or modify side skirts (2)":2,"Add vortex generator to roof, rear window, or rear deck lid (1)":1,"Removal of the front windshield/windshield frame (7)":7,"Front side window frame air dams/diverters (2)":2,"Add a non-OEM hardtop to a convertible that is not the identical shape and size of either the OEM or OEM option hardtop for that car model (5)":5},tires:{"The following DOT-approved R-compound tires: BFG R1S, Goodyear Eagle RS AC (auto- cross), Hoosier A7, Hankook Z214 (C90 & C91 compounds only), Hoosier Wet DOT (22)":22,"The following DOT-approved R-compound tires and those with a UTQG treadwear rating of 40 or less not listed otherwise in these rules: BFG R1, Goodyear Eagle RS (10)":10,"Hankook Z214, Hoosier R7, Kumho V710, Yokohama A055 (10)":10,"BFGoodrich g-Force Rival, Cooper RS3-R, Maxxis Victra RC-1, Michelin Pilot Sport 4S (6)":6," Nankang AR-1, Nitto NT01, Toyo Proxes R888/R888R/RA-1/RR (6)":6,"Bridgestone Potenza RE-71R/RE-71RS, BFGoodrich g-Force Rival S, Continental ExtremeContact Force, Dunlop Direzza ZII (3)":3,"Falken Azenis RT615K+, Falken Azenis RT660, Maxxis Victra VR-1, Federa 595 RS-RR (3)":3,"Goodyear Eagle F1 SuperCar 3, Hankook Ventus RS4, Kumho ECSTA V720/V730, Michelin Sport Cup 2 Connect (3)":3,"Nankang CR-S/NS-2R, Nexen Nfera SUR4G, Yokohama Advan AD09/A052, Valino VR08GP, Toyo Proxes R1R (3)":3},weight:{"5 lbs (1)":1,"20 lbs (2)":2,"35 lbs (3)":3,"50 lbs (4)":4,"65 lbs (5)":5,"80 lbs (6)":6,"95 lbs (7)":7,"110 lbs (8)":8,"125 lbs (9)":9,"140 lbs (10)":10,"155 lbs (11)":11,"170 lbs (12)":12,"185 lbs (13)":13,"200 lbs (14)":14,"215 lbs (15)":15,"230 lbs (16)":16,"245 lbs (17)":17,"260 lbs (18)":18,"275 lbs (19)":19,"290 lbs (20)":20,"305 lbs (21)":21,"320 lbs (22)":22,"335 lbs (23)":23,"350 lbs (24)":24,"365 lbs (25)":25,"380 lbs (26)":26,"395 lbs (27)":27,"410 lbs (28)":28,"425 lbs (29)":29,"440 lbs (30)":30,"455 lbs (31)":31,"470 lbs (32)":32,"485 lbs (33)":33,"500 lbs (34)":34}},classLookupTable:{"ILX 2.4L(13)":"TTE","Integra 1.6L(86-89)":"TTE","Integra 1.8L(non-VTEC)(90-93)":"TTE","Integra 1.8(non-VTEC)(94-01)":"TTE","Integra GSR":"TTE","Integra Type-R":"TTD","NSX 3.0L(91-96)":"TTC",NSX:"TTC",RSX:"TTE","RSX-S":"TTD","4C":"TTC","Giulia Quadrifoglio":"TTB","S4(03-07)(AWD)":"TTC","RS4(4.2L)(AWD)(07)":"TTB","TT(180hp)(00-06)":"TTE","TT(225hp)(02-06)(AWD)":"TTD","TT(250hp)(04-06)":"TTD","TT Quatro 3.2L (08-09)(AWD)":"TTD","TTS(09-15)(AWD)(Turbo)":"TTC","TTRS 2.5 Coupe (12-13)(AWD)":"TTB","R8(V8)":"TTA","R8(V10)":"TTA","128i Coupe(08-09)":"TTD","135i Coupe(08-12)":"TTC","328i(E36)":"TTE","328i(E46)":"TTE","328i(12-14)(2.0Lturbo)":"TTD","335i(07-13)(3.0)turbo":"TTC",M2:"TTB",M2CS:"TTA",M235:"TTC",M240:"TTB","M3(E30)":"TTE","M3(E36)":"TTD","M3(E46)":"TTC","M3(E90,E92,E93)":"TTB","M3/M4(F8X)":"TTA","M3/M4(G8X)":"TTA","M5 E28 E34(85-93)":"TTD","M5 E39":"TTC","M5 E60":"TTA",M6:"TTA",Z4:"TTB","CTS-V(04-07)":"TTC","CTS-V(09-11)":"TTA","Camaro SS(5th gen)":"TTB","Camaro SS(6th gen)":"TTB","Corvette C4":"TTC","Corvette C5":"TTA","Corvette C6":"TTA","Corvette C7":"TTA","Corvette C7 Z06":"TTA","Corvette C7 ZR-1":"TTA","Corvette C8":"TTA","Challenger R/T":"TTD","Challenger SRT8":"TTC","Charger 5.7L":"TTD","Charger SRT8":"TTC",Viper:"TTA","Viper ACR":"TTA",308:"TTD",328:"TTC",355:"TTA",360:"TTA",F430:"TTA",458:"TTA",488:"TTA",F12:"TTA",124:"TTE","500 Abarth":"TTE","Fiesta ST":"TTE","Focus ST":"TTD","Focus RS":"TTC","Mustang GT V8(5th gen)":"TTB","Mustang GT V8(6th)":"TTB","Mustang GT350":"TTA","Mustang GT350R":"TTA","Mustang GT500":"TTA","Accord 3.0 V6":"TTE","Accord 3.5 V6":"TTD","Civic Si":"TTE","Civic Type R(FK8/FL5)":"TTC",Fit:"TTE","S2000(00-08)":"TTD","S2000(K Swap)":"TTC","S2000 CR(2.2L)":"TTC",Genesis:"TTB","Veloster N":"TTC","Elantra N":"TTC","Kona N":"TTC",Huracan:"TTA",Gallardo:"TTA",Aventador:"TTA",Urus:"TTB",Elise:"TTB",Evora:"TTA",Exige:"TTA","IS F":"TTB","GS F":"TTB",LC500:"TTB","Mazdaspeed3(07-09)":"TTD","Mazdaspeed3(10-13)":"TTD","Mazdaspeed6(06-07)":"TTD","Miata 1.6L":"TTE","Miata 1.8L":"TTE","Miata 1.8L VVT":"TTE","Miata NC":"TTE","Miata ND":"TTE","Miata Mazdaspeed":"TTE","RX7 13B":"TTE","RX-7 TT(3rd gen)":"TTC","RX-8(04-08)":"TTD","RX-8(09-11)":"TTD","RX-8 R3(09-11)":"TTC","RX-8(197hp)(Auto)(04-05)":"TTE","RX-8(212hp)(Auto)(06-07)":"TTE",C43AMG:"TTC",C63AMG:"TTB",E55AMG:"TTB",E63AMG:"TTB",GT:"TTA",GTs:"TTA",SLS:"TTA","MP4 12C":"TTA","570s":"TTA","600LT":"TTA","650s":"TTA","720s":"TTA",Senna:"TTA","Cooper S(02-04)":"TTE","Cooper S(05-10)":"TTE","Cooper S(F56)":"TTD","EVO VIII":"TTC","EVO IX":"TTB","EVO X":"TTB","240Z":"TTE","300ZX":"TTE","350Z":"TTC","370Z":"TTB","400Z":"TTB",GTR:"TTA",964:"TTD",993:"TTC",996:"TTB","996GT3":"TTA",997.1:"TTB",997.2:"TTA","997 Turbo":"TTA","997.1 GT3":"TTA","997.2 GT3":"TTA","997 GT3RS":"TTA",991.1:"TTA",991.2:"TTA","991.1 GT3":"TTA","991.2 GT3":"TTA","991 Turbo":"TTA","991 GT3RS":"TTA","991 GT2RS":"TTA",992:"TTA","992 Turbo":"TTA","992 GT3":"TTA","Cayman/Boxster 718":"TTB","Cayman/Boxster 981":"TTB","Cayman/Boxter GTS":"TTA","Cayman 981 GT4":"TTA","718 GT4":"TTA","BRZ(gen1)":"TTD","BRZ(gen2)":"TTD",STI:"TTB",WRX:"TTB","WRX(02-08)":"TTD","Model 3":"TTC","Model 3 Dual Motor":"TTB","Model S":"TTB","Model S Plaid":"TTA","FRS/FT86":"TTD",GR86:"TTD","Supra(2.0)":"TTB","Supra(3.0)":"TTA","GR Corolla":"TTB","Celica GT-S":"TTE","MR2 (gen1)":"TTE","MR2 2.2L DOCH":"TTE","MR2 SC":"TTE","MR2 Turbo":"TTE","GTI(06-09)":"TTE","GTI(10-14)":"TTE","GTI(15)":"TTE","GTI(19)":"TTD","GOLF R32":"TTE","GOLF R(12-13)":"TTD","GOLF R(15)":"TTC","GOLF R(19)":"TTB"},oneStarModel:["NSX 3.0L(91-96)","NSX","RSX","Giulia Quadrifoglio","RS4(4.2L)(AWD)(07)","TT Quatro 3.2L (08-09)(AWD)","TTRS 2.5 Coupe (12-13)(AWD)","135i Coupe(08-12)","328i(E36)","335i(07-13)(3.0)turbo","M2","M235","M3(E30)","M3(E36)","M3(E46)","M3(E90,E92,E93)","M5 E28 E34(85-93)","M5 E39","Cooper S(02-04)","Cooper S(05-10)","Camaro SS(5th gen)","Camaro SS(6th gen)","Corvette C4","Corvette C7 ZR-1","Challenger R/T","Challenger SRT8","Charger 5.7L","Charger SRT8","328","500 Abarth","Fiesta ST","Focus ST","Mustang GT350R","Mustang GT500","Civic Si","S2000(00-08)","S2000 CR(2.2L)","IS F","Mazdaspeed3(07-09)","Mazdaspeed3(10-13)","Mazdaspeed6(06-07)","Miata 1.8L VVT","Miata NC","Miata ND","Miata Mazdaspeed","RX-7 TT(3rd gen)","RX-8(09-11)","RX-8(212hp)(Auto)(06-07)","EVO VIII","EVO X","370Z","400Z","964","993","997.1","BRZ(gen2)","WRX(02-08)","GR86","Supra(2.0)","MR2 Turbo","MR2 SC","CTS-V(04-07)","GTI(06-09)","GTI(10-14)","GTI(15)","GOLF R32","GOLF R(15)","GOLF R(12-13)"],twoStarModel:[]}),methods:{calculateScore(){console.log(this.carspec),this.oneStarModel.includes(this.carspec.model)&&(this.score+=7),this.twoStarModel.includes(this.carspec.model)&&(this.score+=14),this.carspec.engine.forEach((e=>{this.score+=this.scoreLookupTable.engine[e]})),this.carspec.drivetrain.forEach((e=>{this.score+=this.scoreLookupTable.drivetrain[e]})),this.carspec.suspension.forEach((e=>{this.score+=this.scoreLookupTable.suspension[e]})),this.carspec.chassis.forEach((e=>{this.score+=this.scoreLookupTable.chassis[e]})),this.carspec.areo.forEach((e=>{this.score+=this.scoreLookupTable.areo[e]})),this.carspec.tires.forEach((e=>{this.score+=this.scoreLookupTable.tires[e]})),this.carspec.weight.forEach((e=>{this.score+=this.scoreLookupTable.weight[e]})),this.carclass=this.classLookupTable[this.carspec.model];var e=this.score+this.classesScore[this.carclass],o=parseInt(e/20);this.finalclass=o>5?"TTSU":this.classes[o]},getModel(){return this.model[this.carspec.make]},reloadPage(){window.location.reload()}}},O=G,Z=t(1001),x=(0,Z.Z)(O,y,w,!1,null,null,null),D=x.exports,F={name:"App",components:{LightSpeed:D},data:()=>({})},L=F,B=(0,Z.Z)(L,i,n,!1,null,null,null),N=B.exports,V=t(2250);r.ZP.use(V.Z);var _=new V.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:_,render:e=>e(N)}).$mount("#app")}},o={};function t(r){var a=o[r];if(void 0!==a)return a.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(o,r,a,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var n=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(n=!1,s<i&&(i=s));if(n){e.splice(d--,1);var c=a();void 0!==c&&(o=c)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var a,s,i=r[0],n=r[1],l=r[2],c=0;if(i.some((function(o){return 0!==e[o]}))){for(a in n)t.o(n,a)&&(t.m[a]=n[a]);if(l)var d=l(t)}for(o&&o(r);c<i.length;c++)s=i[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},r=self["webpackChunklightspeedcal"]=self["webpackChunklightspeedcal"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4993)}));r=t.O(r)})();
//# sourceMappingURL=app.c6f47415.js.map