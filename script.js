// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai

// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

var countries = [
    {country : "Lietuva", area : 65300, people : 2.70 },
    {country : "Latvija", area : 64589, people : 1.82 },
    {country : "Lenkija", area : 322575, people : 40.70 },
    {country : "Liuksemburgas", area : 2586, people : 0.65 },
    {country : "Liberija", area : 111369, people : 5.46 },

]

for (var i = 0; i < countries.length; i++){
    console.log("Šalis: " + countries[i].country + ", " + "joje gyvena " + countries[i].people + " mln. gyventojų.")

    console.log("Valstybės plotas: " + countries[i].area + " km², plotas tenkantis vienam gyventojui: " )

    console.log("=========================")
}


console.log("Valstybės plotas: " + " km², plotas tenkantis vienam gyventojui: " + "m²" )